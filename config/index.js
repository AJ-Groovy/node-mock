const config = {
  local: {
    mode: "local",
    db: "mongodb+srv://aj:Qwerty123@mock-db-a94cm.mongodb.net/test?retryWrites=true&w=majority",
    port: 3000
  },
  develop: {
    mode: "dev",
    db: "mongodb+srv://aj:Qwerty123@mock-db-a94cm.mongodb.net/test?retryWrites=true&w=majority",
    port: 4000
  },
  production: {
    mode: "production",
    db: "mongodb+srv://aj:Qwerty123@mock-db-a94cm.mongodb.net/test?retryWrites=true&w=majority",
    port: 5000
  }
};
module.exports = function(mode) {
  return config[mode || process.argv[2] || "local"] || config.local;
};
