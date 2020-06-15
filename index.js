const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    nombre: String
  }
`;

const resolvers = {
  Query: {
    nombre: (root, args, context) => {
      return 'Edu Lazaro';
    }
  }
}

const servidor = new ApolloServer({ typeDefs, resolvers });

servidor.listen().then(({ url }) => {
  console.log(`El servidor está esperando en la URL ${url}`);
});
