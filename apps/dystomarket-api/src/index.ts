import { server } from './server';
import { registerWorker } from './worker';

const PORT = parseInt(process.env.PORT ?? '3001', 10);

server.listen({ port: PORT }, async () => {
  await registerWorker();
});
