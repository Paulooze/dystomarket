import Redis from 'ioredis';
import { unwrap } from './helpers/unwrap';

const REDIS_DB_URL = unwrap(process.env.REDIS_DB_URL);

export const pubRedis = new Redis(REDIS_DB_URL);
export const subRedis = new Redis(REDIS_DB_URL);
