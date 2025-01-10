import { gql } from '@apollo/client';

export const login = gql`
  mutation loginTemplate($code: String!, $state: String!) {
    loginTemplate(code: $code, state: $state) {
      email
      requiresEmailVerification
      sub
    }
  }
`;
