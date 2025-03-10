import { server } from './server';
import { registerWorkers } from './worker';

const PORT = parseInt(process.env.PORT ?? '8080', 10);

server.listen({ port: PORT, host: '0.0.0.0' }, async () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
  await registerWorkers();
});
