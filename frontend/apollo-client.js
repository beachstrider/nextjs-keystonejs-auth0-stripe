import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/api/graphql",
  cache: new InMemoryCache,
  fetchOptions: {
    mode: 'no-cors',
  },
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  }
});

export default client;
