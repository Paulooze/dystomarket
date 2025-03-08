import { server } from './server';
import { registerWorker } from './worker';

const PORT = parseInt(process.env.PORT ?? '8080', 10);

server.listen({ port: PORT, host: '0.0.0.0' }, async () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
  await registerWorker();
});
