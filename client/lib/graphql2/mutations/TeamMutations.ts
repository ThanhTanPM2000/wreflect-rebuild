import { gql } from '@apollo/client';
import { OpinionStatus, Team } from '@/types';

export type createTeamVars = {
  name: string;
  startDate: string;
  endDate: string;
  description?: string;
  isPublic?: boolean;
  picture?: string;
};

export type createTeamResult = {
  createTeam: Team;
};

export const createTeam = gql`
  mutation createTeam(
    $name: String!
    $startDate: String!
    $endDate: String!
    $picture: String!
    $description: String
    $status: String
    $isPublic: Boolean
  ) {
    createTeam(
      name: $name
      startDate: $startDate
      endDate: $endDate
      picture: $picture
      description: $description
      status: $status
      isPublic: $isPublic
    ) {
      ...TeamFragment
    }
  }
`;

export type updateTeamResult = {
  updateTeam: Team;
};
export type updateTeamVars = {
  teamId: string;
  name: string;
  startDate: string;
  endDate: string;
  picture: string;
  isPublic: boolean;
  description: string;
};
export const updateTeam = gql`
  mutation updateTeam(
    $teamId: ID!
    $name: String!
    $startDate: String!
    $endDate: String!
    $picture: String!
    $isPublic: Boolean!
    $description: String!
  ) {
    updateTeam(
      teamId: $teamId
      name: $name
      startDate: $startDate
      endDate: $endDate
      isPublic: $isPublic
      picture: $picture
      description: $description
    ) {
      ...TeamFragment
    }
  }
`;

export type deleteTeamResult = {
  deleteTeam: Team;
};
export type deleteTeamVars = {
  teamId: string;
};
export const deleteTeam = gql`
  mutation deleteTeam($teamId: ID!) {
    deleteTeam(teamId: $teamId) {
      ...TeamFragment
    }
  }
`;

export type changeTeamAccessVars = {
  teamId: string;
  isPublic: boolean;
};

export type changeTeamAccessResult = {
  changeTeamAccess: {
    count: number;
  };
};

export const changeTeamAccess = gql`
  mutation ChangeTeamAccess($teamId: String!, $isPublic: Boolean!) {
    changeTeamAccess(teamId: $teamId, isPublic: $isPublic) {
      ...TeamFragment
    }
  }
`;

export type updateActionTrackerResult = {
  updateActionTracker: Team;
};

export type updateActionTrackerVars = {
  teamId: string;
  sourceBoardId: string;
  sourceColumnId: string;
  destinationBoardId: string;
  destinationColumnId: string;
  opinionId: string;
  responsible: string;
  status: OpinionStatus;
};

export const updateActionTracker = gql`
  mutation updateActionTracker(
    $teamId: String!
    $sourceBoardId: String!
    $sourceColumnId: String!
    $destinationBoardId: String!
    $destinationColumnId: String!
    $opinionId: String!
    $responsible: String!
    $status: OpinionStatus!
  ) {
    updateActionTracker(
      teamId: $teamId
      sourceBoardId: $sourceBoardId
      sourceColumnId: $sourceColumnId
      destinationBoardId: $destinationBoardId
      destinationColumnId: $destinationColumnId
      opinionId: $opinionId
      responsible: $responsible
      status: $status
    ) {
      ...TeamFragment
    }
  }
`;

export type joinTeamWithLinkResult = {
  joinTeamWithLink: Team;
};
export type joinTeamWithLinkVars = {
  teamId: string;
};
export const joinTeamWithLink = gql`
  mutation joinTeamWithLink($teamId: String!) {
    joinTeamWithLink(teamId: $teamId) {
      ...TeamFragment
    }
  }
`;
