import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers/resolvers';
const { sequelize } = require('./database/index.js');


const server = new GraphQLServer({
    typeDefs : "typeDefs/schema.graphql",
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

