import Fastify from 'fastify';
import cors from '@fastify/cors';
import { FastifySSEPlugin } from 'fastify-sse-v2';
import companyRouter from './companies';
import newsRouter from './news';
import simulateRouter from './simulate';
import sectorsRouter from './sectors';
import streamRouter from './stream';

export const server = Fastify({ logger: false });

server.register(cors, {
  origin: true,
});
server.register(FastifySSEPlugin);

server.get('/', () => {
  return {
    status: 'ok',
  };
});
server.get('/api/health', () => {
  return {
    status: 'ok',
  };
});

server.register(companyRouter, { prefix: '/api' });
server.register(newsRouter, { prefix: '/api' });
server.register(simulateRouter, { prefix: '/api' });
server.register(sectorsRouter, { prefix: '/api' });
server.register(streamRouter, { prefix: '/api' });
