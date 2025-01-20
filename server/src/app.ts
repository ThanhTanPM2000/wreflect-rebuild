import http from 'http';
import express from 'express';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { constraintDirective, constraintDirectiveTypeDefs } from 'graphql-constraint-directive';
import cron from 'node-cron';
import './loadEnv';
import './prisma'; // eager load to test connection
import logger from './logger';
import config from './config';
import { resolvers, typeDefs } from './apollo';
import depthLimit from 'graphql-depth-limit';
import { sentRemiderNotification } from './services/notification';
import {
  endAssessmentThatComplete,
  remiderUserNotSubmitAssessment,
  updateSkillsValueOfUser,
} from './services/schedule';

import { graphqlUploadExpress } from 'graphql-upload';
import cookieParser from 'cookie-parser';
import createContext from './middleware/context';

async function startApolloServer(typeDefs, resolvers) {
  const app = express();

  app.use(cookieParser());
  app.use(express.static('public'));

  app.use(graphqlUploadExpress());

  cron.schedule('* */1 * * *', async () => {
    await sentRemiderNotification();
  });

  cron.schedule('0 0 */1 * *', async () => {
    await remiderUserNotSubmitAssessment();
    await endAssessmentThatComplete();
  });

  // cron.schedule('0 0 */10 * *', async () => {
  //   await updateSkillsValueOfUser()
  // })

  cron.schedule('0 0 */15 * *', async () => {
    await updateSkillsValueOfUser();
  });

  let schema = makeExecutableSchema({
    typeDefs: [constraintDirectiveTypeDefs, ...typeDefs],
    resolvers,
  });
  schema = constraintDirective()(schema);

  // let httpServer;
  // if (config.NODE_ENV === 'PROD') {
  //   console.log(config.CERT_PATH);
  //   console.log(config.KEY_PATH);
  //   const options = {
  //     key: fs.readFileSync(config.KEY_PATH),
  //     cert: fs.readFileSync(config.CERT_PATH),
  //   };
  //   httpServer = https.createServer(options, app);
  // } else {
  //   httpServer = http.createServer(app);
  // }

  const httpServer = http.createServer(app);
  const subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
    },
    {
      server: httpServer,
      path: '/graphql',
    },
  );

  const server = new ApolloServer({
    schema,
    context: createContext,
    /* formatError: (err) => {
      const errorsList = ['400', '403', '404', '405'];
      // if(err.extensions?.code === "INTERNAL_SERVER_ERROR") {
      //   return new ApolloError(``)
      // }
      if (err.extensions?.code === `BAD_USER_INPUT`) {
        return new ApolloError(`Invalid argument value`, `${StatusCodes.BAD_REQUEST}`, {
          messageDetail: err?.message,
        });
      } else if (errorsList.includes(err?.extensions?.code || '')) return err;
      else {
        return new ApolloError(err?.message, `${StatusCodes.INTERNAL_SERVER_ERROR}`, {
          messageDetail: err?.message,
        });
      }
    }, */
    validationRules: [depthLimit(10)],
    introspection: process.env.NODE_ENV !== 'production',
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
  });

  await server.start();

  server.applyMiddleware({
    app,
    cors: {
      origin: [
        config.CLIENT_URL,
        'https://wreflect.duckdns.org',
        'http://4.193.194.60:4000',
        'http://4.193.194.60:3000',
        'http://localhost:3000',
        'http://localhost:4000',
        'https://studio.apollographql.com',
      ],
      credentials: true,
    },
  });

  const port = config.PORT || 4000;

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  logger.info(`server is listening on ${config.SERVER_URL}`);
}

startApolloServer(typeDefs, resolvers);
