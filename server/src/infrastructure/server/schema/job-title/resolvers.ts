const jobTiles = [{
  id: '123',
  name: 'Teste',
  description: 'Description',
  order: 1
}]

const resolvers = {
  Query: {
    listJobTitles: () => jobTiles,
  },
};

export default resolvers;