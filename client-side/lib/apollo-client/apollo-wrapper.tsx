'use client';

// ^ this file needs the "use client" pragma
import { redirect } from 'next/navigation';
import { ApolloLink, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

// have a function to create a client for you
function makeClient() {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ extensions }) => {
        if (extensions?.code === 'UNAUTHENTICATED') {
          redirect('/');
        }
      });
    }
  });

  const uploadLink = createUploadLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/graphql`,
    headers: {
      'Apollo-Require-Preflight': 'true',
    },
    credentials: 'include',
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
      ...(typeof window === 'undefined'
        ? [
            new SSRMultipartLink({
              stripDefer: true,
            }),
          ]
        : []),
      errorLink,
      uploadLink,
    ]),
  });
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
