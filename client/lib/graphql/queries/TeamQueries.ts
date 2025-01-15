import { gql } from '@apollo/client';
import {
  BOARD_FRAGMENT,
  MEMBER_FRAGMENT,
  TEAM_FRAGMENT,
  USER_FRAGMENT,
} from '@/lib/graphql/fragments';
import { Team, TeamStatus } from '@/types';

export type getTeamVars = {
  teamId: string;
};

export type getTeamResult = {
  team: Team;
};

const getTeam = gql`
  ${TEAM_FRAGMENT}
  ${BOARD_FRAGMENT}
  ${MEMBER_FRAGMENT}
  ${USER_FRAGMENT}
  query getTeam($teamId: String!) {
    team(teamId: $teamId) {
      ...TeamFragment
      boards {
        ...BoardFragment
      }
      members {
        ...MemberFragment
        user {
          ...UserFragment
        }
      }
    }
  }
`;

enum statusOfTeam {
  DOING,
  DONE,
}

export type getTeamsResult = {
  getTeams: {
    data: Team[];
    total: number;
    page: number;
    size: number;
  };
};

export type getTeamsVars = {
  status?: TeamStatus;
  isGettingAll?: boolean;
  search?: string;
  page?: number;
  size?: number;
};

const getTeams = gql`
  ${TEAM_FRAGMENT}
  query getTeams($status: String, $isGettingAll: Boolean, $search: String, $page: Int, $size: Int) {
    getTeams(
      status: $status
      isGettingAll: $isGettingAll
      search: $search
      page: $page
      size: $size
    ) {
      data {
        ...TeamFragment
      }
      total
    }
  }
`;

export type getTeamsOfUserResult = {
  getTeamsOfUser: {
    data: Team[];
    total: number;
    page: number;
    size: number;
  };
};

export type getTeamsOfUserVars = {
  status?: TeamStatus;
  isGettingAll?: boolean;
  search?: string;
  page?: number;
  size?: number;
};

export const getTeamsOfUser = gql`
  ${TEAM_FRAGMENT}
  query getTeamsOfUser(
    $isGettingAll: Boolean
    $search: String
    $page: Int
    $size: Int
    $status: String
  ) {
    getTeamsOfUser(
      isGettingAll: $isGettingAll
      search: $search
      page: $page
      size: $size
      status: $status
    ) {
      data {
        ...TeamFragment
      }
      total
    }
  }
`;

// export type checkInviteTeamResult = {
//   checkInviteTeam: Team;
// };
// export type checkInviteTeamVars = {
//   teamId: string;
// };
// export const checkInviteTeam = gql`
//   ${TEAM_FRAGMENT}
//   query checkInviteTeam($teamId: String) {
//     checkInviteTeam(teamId: $teamId) {
//       ...TeamFragment
//     }
//   }
// `;
export { getTeams, getTeam };
