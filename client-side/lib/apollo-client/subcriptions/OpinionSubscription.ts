import { OPINION_FIELDS } from './../fragments/opinionFragments';
import { gql } from '@apollo/client';
import { Opinion } from '@/types';

export type updateOpinionResult = {
  updateOpinion: Opinion;
};

export type updateOpinionVars = {
  meId: string;
  teamId: string;
};

// # ${OPINION_FIELDS}
//   # subscription UpdateOpinion {
//   #   updateOpinion {
//   #     ...OpinionFields
//   #   }
//   # }

export const updateOpinion = gql`
  ${OPINION_FIELDS}
  subscription UpdateOpinion($meId: ID!, $teamId: ID!) {
    updateOpinion(meId: $meId, teamId: $teamId) {
      ...OpinionFields
    }
  }
`;

// export const updateOpinion = gql`
//   subscription UpdateOpinion($meId: ID!) {
//     updateOpinion(meId: $meId) {
//       id
//       __typename
//       columnId
//       authorId
//       createdAt
//       updatedAt
//       text
//       upVote
//       updatedBy
//       downVote
//       isAction
//       isBookmarked
//       responsible
//       mergedAuthors
//       color
//       status
//       position
//       column(meId: $meId) {
//         id
//         __typename
//         color
//         title
//         position
//         isActive
//         boardId
//         board(meId: $meId) {
//           id
//           __typename
//           teamId
//           createdAt
//           updatedAt
//           createdBy
//           isPublic
//           isLocked
//           disableDownVote
//           disableUpVote
//           isAnonymous
//           votesLimit
//           title
//           timerInProgress
//           endTime
//           currentPhase
//           type
//           team(meId: $meId) {
//             id
//             __typename
//             name
//             createdAt
//             startDate
//             endDate
//             picture
//             isPublic
//             status
//             description
//             boards(meId: $meId) {
//               id
//               __typename
//               teamId
//               createdAt
//               updatedAt
//               createdBy
//               isPublic
//               isLocked
//               disableDownVote
//               disableUpVote
//               isAnonymous
//               votesLimit
//               title
//               endTime
//               timerInProgress
//               type
//               currentPhase
//               columns(meId: $meId) {
//                 id
//                 __typename
//                 color
//                 title
//                 position
//                 isActive
//                 boardId
//                 opinions(meId: $meId) {
//                   id
//                   __typename
//                   columnId
//                   authorId
//                   createdAt
//                   updatedAt
//                   text
//                   upVote
//                   downVote
//                   updatedBy
//                   isAction
//                   isBookmarked
//                   responsible
//                   mergedAuthors
//                   color
//                   status
//                   position
//                   remarks {
//                     id
//                     __typename
//                     authorId
//                     opinionId
//                     text
//                     createdAt
//                     updatedAt
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
