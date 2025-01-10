import { gql } from '@apollo/client';

export const getPresignedUrl = gql`
  mutation getPresignedUrl($fileName: String!, $fileType: String!) {
    getPresignedUrl(fileName: $fileName, fileType: $fileType) {
      url
    }
  }
`;
