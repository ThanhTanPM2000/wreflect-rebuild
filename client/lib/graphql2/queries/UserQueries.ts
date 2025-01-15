import { gql } from '@apollo/client';
import { User } from '@/types';

const login = gql`
  query login($code: String, $state: String) {
    login(code: $code, state: $state) {
      id
      name
      email
      picture
      status
    }
  }
`;

const me = gql`
  query me {
    me {
      ...UserFragment
      notification: {
        ...NotificationFragment
      }
      skillValues: {
        ...UserOnCriteriaFragment
      }
    }
  }
`;

export type getUserResult = {
  getUser: User;
};

export type getUserVars = {
  userId?: string;
};

const getUser = gql`
  query getUser($userId: ID) {
    getUser(userId: $userId) {
      ...UserFields
    }
  }
`;

export type getUsersResult = {
  getUsers: {
    data: User[];
    total: number;
    page: number;
    size: number;
  };
};
export type getUsersVars = {
  isGettingAll?: boolean;
  search?: string;
  page?: number;
  size?: number;
};
export const getUsers = gql`
  query getUsers($isGettingAll: Boolean, $search: String, $page: Int, $size: Int) {
    getUsers(isGettingAll: $isGettingAll, search: $search, page: $page, size: $size) {
      data {
        ...UserFragment
      }
      total
      page
      size
    }
  }
`;

export { login, me, getUser };
