import { GraphQLServer,express } from 'graphql-yoga';
import resolvers from './resolvers/resolver.js';
import { sequelize } from './sequelize/models/index.js';
import user from './sequelize/dao/user.js'

const server = new GraphQLServer({
    typeDefs: "typeDefs/schema.graphql",
    resolvers
})

sequelize
    .sync()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


    
server.start(() => console.log("GraphQL Server Start!"));

