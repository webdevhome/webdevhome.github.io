import http from 'http';
import serveHandler from 'serve-handler';
import { never } from './utils';

export function runServer() {
  const serverInit = () => { console.log(`running at http://localhost:${port}`) }
  const port = 4000

  http.createServer(serveHandler)
    .listen(port, serverInit)

  return never
}
