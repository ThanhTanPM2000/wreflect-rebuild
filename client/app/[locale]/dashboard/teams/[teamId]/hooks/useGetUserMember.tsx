import { useContext } from 'react';
import { Maybe, Member, Team } from '@/__generated__/generated-hooks';
import { AuthContext } from '../../../contexts/AuthContext';
import { TeamContext } from '../context/TeamProvider';

const useGetUserMember = (): Maybe<Member> | undefined => {
  const { userId } = useContext(AuthContext);
  const team: Team = useContext(TeamContext);

  const member = team?.members?.find(
    (member) => member && member.user && member?.user.id == userId
  );

  return member;
};

export default useGetUserMember;
