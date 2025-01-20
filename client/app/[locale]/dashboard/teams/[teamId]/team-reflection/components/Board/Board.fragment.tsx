import { gql } from '@apollo/client';
import { COLUMN_DETAIL_FRAGMENT } from '../Column';

const BOARD_DETAIL_FRAGMENT = gql`
  fragment BoardDetailFragment on Board {
    id
    teamId
    createdAt
    updatedAt
    createdBy
    isPublic
    isLocked
    disableDownVote
    disableUpVote
    isAnonymous
    votesLimit
    meetingNote
    title
    timerInProgress
    endTime
    type
    currentPhase
    columns {
      id
      isActive
      ...ColumnDetailFragment
    }
  }
  ${COLUMN_DETAIL_FRAGMENT}
`;

export default BOARD_DETAIL_FRAGMENT;
