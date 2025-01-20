import { gql } from '@apollo/client';
import { OPINION_DETAIL_FRAGMENT } from '../Opinion';

const COLUMN_DETAIL_FRAGMENT = gql`
  fragment ColumnDetailFragment on Column {
    id
    color
    title
    isActive
    boardId
    opinions {
      id
      text
      ...OpinionDetailFragment
    }
  }
  ${OPINION_DETAIL_FRAGMENT}
`;

export default COLUMN_DETAIL_FRAGMENT;
