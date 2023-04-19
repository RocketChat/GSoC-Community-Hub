module.exports = {
  apps: [
    {
      name: 'rockonpi community',
      script: 'npm',
      args: 'start -- -p 8090',
      pid_file: '/tmp/rockonpi.pid',
      max_restarts: 10,
      autorestarts: true,
      error_file: 'rockonpi.log',
      out_file: 'rockonpi.log',
      exec_mode: 'fork',
      instances: 1,
    },
  ],
};
