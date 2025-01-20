import { cookies } from 'next/headers';
import { ApolloLink, from, HttpLink, split } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { getMainDefinition } from '@apollo/client/utilities';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';

const httpLink = new HttpLink({
  uri: `http://localhost:4000/graphql`,
  credentials: 'include',
});

// const uploadLink = createUploadLink({
//   uri: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/graphql`,
//   headers: {
//     'Apollo-Require-Preflight': 'true',
//   },
//   credentials: 'include',
// });
//

if (true) {
  // Adds helpful error messages during development
  loadDevMessages();
  loadErrorMessages();
}

const splitLink = split(({ query }) => {
  const definition = getMainDefinition(query);
  return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
}, httpLink);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const cookieLink = setContext(async (_, { headers }) => {
  const cookiesString = (await cookies()).toString();

  return {
    headers: {
      ...headers,
      cookie: cookiesString,
    },
  };
});

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    // link: from([errorLink, splitLink]),
    link: from([errorLink, cookieLink, httpLink]),
    credentials: 'include',
  });
});
