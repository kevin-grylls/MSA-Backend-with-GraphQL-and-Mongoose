import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Document {
    stringType: String!
    booleanType: Boolean!
    integerType: Int
  }

  type Query {
    sample: [Document]
  }

  type Mutation {
    sample(sample: String!): Document!
  }
`;

export default typeDefs;
