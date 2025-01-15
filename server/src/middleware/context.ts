import jwt from 'jsonwebtoken';
import * as services from '../services';
import { setCookie } from '../helpers';
import { GraphQLError } from 'graphql';

export const createContext = async ({ req, res }) => {
  const { operationName } = req.body;

  // if (operationName === 'loginTemplate') {
  //   return { req, res };
  // }
  if (req?.body?.query.startsWith('query IntrospectionQuery') || operationName === 'loginTemplate') {
    return { req, res };
  }

  const token = req?.cookies?.wReflect;

  let sanitizedUser: { email: string; id: string; isAdmin: boolean };
  try {
    const data = jwt.verify(token, 'wReflect');
    if (typeof data === 'string') {
      throw new Error();
    }
    const user = await services.session.checkAndExtendSession(data.email, data.token);

    if (!user) {
      throw new Error();
    }
    sanitizedUser = { email: user.email, id: user.id, isAdmin: user.isAdmin };
  } catch (error) {
    setCookie('wReflect', '', 0, res);
    throw new GraphQLError('User is not authenticated', {
      extensions: {
        code: 'UNAUTHENTICATED',
      },
    });
  }

  req.user = sanitizedUser;

  return { req, res };
};

export default createContext;
