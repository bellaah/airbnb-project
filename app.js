import { GraphQLServer,express } from 'graphql-yoga';
import resolvers from './resolvers/resolver.js';
import { sequelize } from './sequelize/models/index.js';

const server = new GraphQLServer({
    typeDefs: "typeDefs/schema.graphql",
    resolvers
})
    
server.start(() => console.log("GraphQL Server Start!"));

