module.exports = {
  apps: [
    {
      name: "server", // Name of the process
      script: "server.js", // Path to your server.js file
      watch: false, // Optional: Enable if you want to watch for file changes
      env: {
        NODE_ENV: "development", // This will load .env.development
      },
       env_development: { // This is the environment for the `--env development` flag
        NODE_ENV: "development", // This will load .env.development
      },
      env_production: {
        NODE_ENV: "production", // This will load .env.production
      },
    },
  ],
};
