import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './schemas';

const server = new ApolloServer({ resolvers, typeDefs })

server.listen()
  .then( ({ url }) => console.log(`server is ready at ${url}`) )


// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}
