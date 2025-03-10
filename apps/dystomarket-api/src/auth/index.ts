import { FastifyPluginCallback } from 'fastify';

const authRouter: FastifyPluginCallback = (fastify, opts, done) => {
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
