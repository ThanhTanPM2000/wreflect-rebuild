import React from 'react';
import { MEMBER_AVATAR_FRAGMENT } from '.';
import { gql, useFragment } from '@apollo/client';
import { Avatar } from '@mantine/core';
import { MemberAvatarFragmentFragment } from '@/__generated__/generated-hooks';

type Props = {
  picture: string;
  size?: number;
};

const MemberAvatar = ({ picture, size = 25 }: Props) => {
  return <Avatar size={size} src={picture} />;
};

export default MemberAvatar;
