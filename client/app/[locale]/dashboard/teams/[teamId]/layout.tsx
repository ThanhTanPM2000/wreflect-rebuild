import React from 'react';
import { headers } from 'next/headers';
import { gql } from '@apollo/client';
import { GetTeamQuery } from '@/__generated__/generated-hooks';
import { getClient, query } from '@/lib/graphql/client';
import TeamHeader from './components/TeamHeader';
import TeamProvider from './context/TeamProvider';
import { BOARD_DETAIL_FRAGMENT } from './team-reflection/components/Board';
import { MEMBER_AVATAR_FRAGMENT } from './team-reflection/components/MemberAvatar';

const GET_TEAM = gql`
  query getTeam($teamId: String!) {
    team(teamId: $teamId) {
      name
      members {
        id
        user {
          id
          picture
        }
        ...MemberAvatarFragment
      }
      boards {
        id
        ...BoardDetailFragment
      }
    }
  }
  ${MEMBER_AVATAR_FRAGMENT}
  ${BOARD_DETAIL_FRAGMENT}
`;

type Props = {
  children: React.ReactNode;
  params: Promise<{ teamId: string }>;
};

const TeamLayout = async ({ children, params }: Props) => {
  const teamId = (await params).teamId;

  const { data } = await getClient().query<GetTeamQuery>({
    query: GET_TEAM,
    variables: {
      teamId,
    },
  });

  return (
    <div className="relative h-full flex flex-col gap-5 overflow-x-auto">
      <div className="sticky z-10 top-0 left-0 h-20">
        <TeamHeader />
      </div>
      {data && data.team && (
        <TeamProvider value={data.team}>
          <div className="flex-grow">{children}</div>
        </TeamProvider>
      )}
    </div>
  );
};

export default TeamLayout;
