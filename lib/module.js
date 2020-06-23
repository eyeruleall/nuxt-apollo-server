import Express from "express";
import { ApolloServer } from "apollo-server-express";

export default async function (options) {
  config = Object.assign({}, options, this.options.apolloServer);

  const app = Express();

  new ApolloServer(config).applyMiddleware({
    app,
    path: "/",
  });

  this.addServerMiddleware({
    handler: app,
    path: "/graphql",
  });
}
