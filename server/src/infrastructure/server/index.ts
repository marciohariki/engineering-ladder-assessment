import { ApolloServer } from 'apollo-server';
import schemaCreator from './schema';

const server = new ApolloServer({ ...schemaCreator() });

export default server;