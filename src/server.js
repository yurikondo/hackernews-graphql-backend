const { ApolloServer, gql } = require("apollo-server");

//HackerNewsの投稿データ（本来はデータベースから取得する）
const links = [
  {
    id: "link-0",
    description: "Udemyで学ぶ",
    url: "udemy.com",
  },
];

//GraphQLのスキーマ（データ構造）の定義
//!はnullは許容しない
const typeDefs = gql`
  type Query {
    info: String!
    feed: [Link]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

const resolvers = {
  Query: {
    info: () => "Hacknewsクローン",
    feed: () => links,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
