import http from 'http';
import serveHandler from 'serve-handler';
import { never } from './utils';

export function runServer() {
  const port = 3000
  http.createServer((...args) => serveHandler(...args))
    .listen(port, () => { console.log(`running at http://localhost:${port}`) })
  return never
}
