import cors from '@fastify/cors';
import websocket from '@fastify/websocket';
import Fastify from 'fastify';
import { FastifySSEPlugin } from 'fastify-sse-v2';
import companyRouter from './companies';
import newsRouter from './news';
import { subRedis } from './redis';
import sectorsRouter from './sectors';
import simulateRouter from './simulate';
import streamRouter from './stream';

export const server = Fastify({ logger: false });

server.register(cors, {
  origin: true,
});
server.register(FastifySSEPlugin);
server.register(websocket);

server.register(async (fastify) => {
  fastify.get('/prices', { websocket: true }, (socket) => {
    subRedis.on('message', (channel, message) => {
      socket.send(message);
    });
    subRedis.subscribe('stock-price-update');
    socket.on('open', () => {
      console.log('🔌 WebSocket Connected');
    });
    socket.on('close', () => {
      console.log('🔌 WebSocket Disconnected');
      subRedis.unsubscribe('stock-price-update');
    });
  });
});

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
