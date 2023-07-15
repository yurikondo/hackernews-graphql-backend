const { ApolloServer, gql } = require("apollo-server");

//GraphQLのスキーマ（データ構造）の定義
//!はnullは許容しない
const typeDefs = gql`
  type Query {
    info: String!
  }
`;

const resolvers = {
  Query: {
    info: () => "Hacknewsクローン",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
