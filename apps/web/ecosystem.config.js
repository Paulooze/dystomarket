module.exports = {
  apps: [
    {
      name: 'next-app',
      script: 'npm',
      args: 'start',
      cwd: '.',
    },
    {
      name: 'news-worker',
      script: 'node dist/news-listener.js',
      cwd: '.',
    },
  ],
};
