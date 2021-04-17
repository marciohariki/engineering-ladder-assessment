import server from './infrastructure/server';

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});