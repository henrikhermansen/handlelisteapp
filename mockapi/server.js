const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mockapi/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router); // Rewrite routes to appear after /api
server.listen(8081, () => console.log('JSON Server is running'));