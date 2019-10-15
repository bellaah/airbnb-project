import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers/resolvers';
import sequelize from './database/index'

const server = new GraphQLServer({
    typeDefs : "typeDefs/schema.graphql",
    resolvers
})

server.start(() => console.log("GraphQL Server Start!"));

