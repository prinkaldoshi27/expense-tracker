const { createServer, Model } = require('json-server');
const server = createServer();
const router = server.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});
