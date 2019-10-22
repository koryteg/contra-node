import "dotenv/config";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import * as session from "express-session";
import { typeDefs } from "./typeDefs";
import resolvers from './resolvers';
// import typeDefs from './schemas';

const startServer = async () => {
  const server = new ApolloServer({
    resolvers, typeDefs,
    context: ({req, res}: any) => ({req, res})
  })
  await createConnection();

  const app = express();

  app.use(
    session({
      secret: "asdfasdf",
      resave: false,
      saveUninitialized: false
    })
  )

  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: "http://localhost:3000"
    }
  });

  app.listen({port: 4000 }, () =>{
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  })
}

startServer()
