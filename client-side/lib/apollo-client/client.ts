import { ApolloLink, from, split } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { getMainDefinition } from '@apollo/client/utilities';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

const uploadLink = createUploadLink({
  uri: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/graphql`,
  headers: {
    'Apollo-Require-Preflight': 'true',
  },
  credentials: 'include',
});

const splitLink = split(({ query }) => {
  const definition = getMainDefinition(query);
  return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
}, uploadLink);

const errorLink = onError(({ graphQLErrors }) => {
  console.log('there is an error');
});

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, uploadLink as unknown as ApolloLink]),
  });
});
