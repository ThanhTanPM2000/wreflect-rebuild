import { useContext } from 'react';
import { Maybe, Member, Team } from '@/__generated__/generated-hooks';
import { AuthContext } from '../../../contexts/AuthContext';
import { TeamContext } from '../context/TeamProvider';

type Props = {
  memberId?: String;
};

const useGetMember = ({ memberId }: Props): Maybe<Member> | undefined => {
  const team: Team = useContext(TeamContext);

  const member = team?.members?.find((member) => member && member?.id == memberId);

  return member;
};

export default useGetMember;
