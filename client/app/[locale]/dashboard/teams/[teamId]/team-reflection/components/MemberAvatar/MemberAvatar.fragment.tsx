import { gql } from '@apollo/client';

const MEMBER_AVATAR_FRAGMENT = gql`
  fragment MemberAvatarFragment on Member {
    id
    user {
      id
      picture
    }
  }
`;

export default MEMBER_AVATAR_FRAGMENT;
