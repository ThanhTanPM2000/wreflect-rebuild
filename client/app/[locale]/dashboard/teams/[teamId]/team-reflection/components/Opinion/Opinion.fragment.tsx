import { gql } from '@apollo/client';

const OPINION_DETAIL_FRAGMENT = gql`
  fragment OpinionDetailFragment on Opinion {
    id
    columnId
    authorId
    createdAt
    updatedAt
    text
    upVote
    downVote
    updatedBy
    isAction
    isBookmarked
    responsible
    mergedAuthors
    color
    status
    position
  }
`;

export default OPINION_DETAIL_FRAGMENT;
