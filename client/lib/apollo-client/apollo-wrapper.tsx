'use client';

import { redirect } from 'next/navigation';
import { ApolloLink, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support';

// have a function to create a client for you
function makeClient() {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/graphql`,
    credentials: 'include',
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ extensions }) => {
        if (extensions?.code === 'UNAUTHENTICATED') {
          redirect('/');
        }
      });
    }
  });

  // const uploadLink = createUploadLink({
  //   uri: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/graphql`,
  //   headers: {
  //     'Apollo-Require-Preflight': 'true',
  //   },
  //   credentials: 'include',
  // });

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
      httpLink,
    ]),
  });
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
