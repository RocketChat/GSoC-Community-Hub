module.exports = {
  apps: [
    {
      name: "GSoC-Community-Hub",
      script: "npm",
      args: "start -- -p 8090",
      pid_file: "/tmp/GSoC-Community-Hub.pid",
      max_restarts: 10,
      autorestarts: true,
      error_file: "GSoC-Community-Hub.error.log",
      out_file: "GSoC-Community-Hub.log",
      exec_mode: "fork",
      instances: 1,
    },
  ],
};
