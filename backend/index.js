const http = require("http");
const app = require("./src/app.js");
const { conf } = require("./src/config/config.js");

const server = http.createServer(app);

server.listen(conf.port || 1111, () => {
  console.log("Running on port: " + conf.port);
});
