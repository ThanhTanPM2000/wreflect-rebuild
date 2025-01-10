import { REMARK_FIELDS } from './../fragments/remarkFragment';
import { USER_FIELDS } from './../fragments/userFragment';
import { OPINION_FIELDS } from './../fragments/opinionFragments';
import { COLUMN_FIELDS } from './../fragments/columnFragment';
import { Board } from '@/types';
import { gql } from '@apollo/client';

import { BOARD_FIELDS } from '../fragments/boardFragment';

export type getBoardsResult = {
  boards: Board[];
};

export type getBoardsVars = {
  teamId: string;
};

export const getBoards = gql`
  ${BOARD_FIELDS}
  query Boards($teamId: String!) {
    boards(teamId: $teamId) {
      ...BoardFields
    }
  }
`;

export type getBoardResult = {
  board: Board;
};

export type getBoardVars = {
  boardId: string;
};

export const getBoard = gql`
  ${BOARD_FIELDS}
  query getBoard($boardId: String) {
    board(boardId: $boardId) {
      ...BoardFields
    }
  }
`;
