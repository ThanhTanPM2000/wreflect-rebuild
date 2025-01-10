import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type TemplateQuestion {
    id: String
    title: String
    templateId: String
    color: String
    description: String
  }
`;

export default typeDefs;
