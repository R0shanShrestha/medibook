import http from "http";
import { app } from "./src/app.js";
import { conf } from "./src/config/config.js";
import { dbConection } from "./src/db/dbCon.js";
import { CloudConnect } from "./src/config/cloudinary.js";

const server = http.createServer(app);
CloudConnect()
if (dbConection()) {
  server.listen(conf.port, () => {
    console.log("Running on port: " + conf.port);
  });
} else {
  console.log("Server Error");
}
