import { GraphQLServer,express } from 'graphql-yoga';
import resolvers from './resolvers/resolver.js';
import { sequelize } from './sequelize/models/index.js';

const server = new GraphQLServer({
    typeDefs: "typeDefs/schema.graphql",
    resolvers
})

const graphqlServerOptions = {
    endpoint: '/graphql',
}

sequelize
    .sync()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    
server.start(graphqlServerOptions,() => 
    console.log("GraphQL Server Start!"
));

