import http from 'http';
import * as app from './app';
const port = process.env.PORT || 3001;
const server = http.createServer(app.app);
server.listen(port);
console.log(`http://localhost:${port}/`)




