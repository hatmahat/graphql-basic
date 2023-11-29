import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// types
import { typeDefs } from "./schema";

 // server setup
const server = new ApolloServer({
  typeDefs, // -- defenitions of types of data
  // resolvers // -- contains a bunch of resolver functions (to handle the queries based on our schema)
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port", 4000);
