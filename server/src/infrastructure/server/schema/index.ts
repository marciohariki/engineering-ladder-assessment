import { get, compact, map, merge, List } from 'lodash';

const schema = [
    require('./job-title')
]

const getAndCompact = (arr: List<object>, path: any) => compact(map(arr, (a) => get(a, path)));

const schemaCreator = () => ({
  typeDefs: getAndCompact(schema, 'typeDefs'),
  resolvers: merge({}, ...getAndCompact(schema, 'resolvers')),
});

export default schemaCreator;