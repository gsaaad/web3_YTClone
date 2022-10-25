import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://thegraph.com/hosted-service/subgraph/gsaaad/yt-clone",
  cache: new InMemoryCache(),
});

export default client;
