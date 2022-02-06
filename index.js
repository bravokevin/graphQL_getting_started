const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
//the graph QL schema
const typeDefs = require('./schema.js')
// args son todos los argumentos que se pasan al momento de hacer un query


const resolvers = require("./resolvers.js")

const dataSources = () =>({
    sessionAPI: new SessionAPI()
})

const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    dataSources, 
    // introspection: false,
    // playground: false
});

server
    .listen({ port: process.env.PORT || 4000 })
    .then((serverUrl) => {
        console.log(serverUrl)
    })

// schema: les permite a las personas que consumen la API saver cuales son los valores que pueden agarrar para hacer sus queries