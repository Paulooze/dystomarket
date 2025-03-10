import { FastifyPluginCallback } from 'fastify';
import bcrypt from 'bcrypt';
import { prisma } from '@dystomarket/db';
import { isStrongPassword } from 'validator';
import { makeAccessTokenCookie, makeRefreshTokenCookie } from './auth.helpers';

const authRouter: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.post('/register', async (req, res) => {
    const { username, email, password } = req.body as {
      username: string;
      email: string;
      password: string;
    };

    if (!isStrongPassword(password)) {
      return res.status(400).send({
        error:
          'Weak password. Use at least 8 characters, including upper/lowercase, a number, and a special symbol.',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const accessToken = fastify.jwt.sign(
      { id: user.id, email: user.email },
      { expiresIn: '15m' },
    );
    const refreshToken = fastify.jwt.sign({ id: user.id }, { expiresIn: '7d' });

    return res
      .setCookie('accessToken', accessToken, makeAccessTokenCookie())
      .setCookie('refreshToken', refreshToken, makeRefreshTokenCookie())
      .status(200)
      .send({ message: 'User created.' });
  });

  fastify.post('/refresh-token', async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken;

      if (refreshToken == null) {
        return res.status(401).send({ message: 'Unauthorized' });
      }

      const decoded = fastify.jwt.verify<{ id: number }>(refreshToken);
      const newAccessToken = fastify.jwt.sign(
        { id: decoded.id },
        { expiresIn: '15m' },
      );
      const newRefreshToken = fastify.jwt.sign(
        { id: decoded.id },
        { expiresIn: '7d' },
      );

      return res
        .setCookie('accessToken', newAccessToken, makeAccessTokenCookie())
        .setCookie('refreshToken', newRefreshToken, makeRefreshTokenCookie())
        .send({ message: 'Token refreshed' });
    } catch {
      return res.status(401).send({ message: 'Invalid refresh token' });
    }
  });

  fastify.post('/logout', async (req, res) => {
    return res
      .clearCookie('accessToken', { path: '/' })
      .clearCookie('refreshToken', { path: '/refresh-token' })
      .send({ message: 'Logged out' });
  });

  fastify.post('/login', async (req, res) => {
    const { email, password } = req.body as { email: string; password: string };

    if (!email || !password) {
      return res
        .status(400)
        .send({ error: 'Email and password are required.' });
    } else {
      return res.send({ message: 'Logged in.' });
    }
  });

  done();
};

export default authRouter;
