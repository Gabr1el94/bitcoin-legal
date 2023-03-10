import { ApolloServer } from 'apollo-server';
import { typeDefs } from "./graphql/schema";
import { resolvers } from './graphql/resolvers'; 

const server = new ApolloServer({typeDefs: typeDefs, resolvers: resolvers});

server.listen().then(({url}:{url:string}) =>{
    console.log(`listening server ${url}`)
})