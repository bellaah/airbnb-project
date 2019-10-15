import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers/resolvers';

const server = new GraphQLServer({
    typeDefs : "typeDefs/schema.graphql",
    resolvers
})

server.start(() => console.log("GraphQL Server Start!"));

