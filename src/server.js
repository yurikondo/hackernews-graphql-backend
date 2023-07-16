const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const path = require("path");
const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

const links = [
  {
    id: "link-0",
    description: "Udemyで学ぶ",
    url: "udemy.com",
  },
];

const resolvers = {
  Query: {
    info: () => "Hacknewsクローン",
    feed: () => links,
  },
  Mutation: {
    post: (parent, args) => {
      let idCount = links.length;

      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };

      links.push(link);
      return link;
    },
  },
};

const server = new ApolloServer({
  typeDefs: gql(
    fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf-8")
  ),
  resolvers,
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  サーバーが起動しました。URL: ${url}`);
});
