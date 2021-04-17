import { gql } from 'apollo-server';

const typeDefs = gql`
  type JobTitle {
    id: ID!
    name: String!
    description: String
    order: Int!
  }

  type Query {
    listJobTitles: [JobTitle]
  }
`;

export default typeDefs;