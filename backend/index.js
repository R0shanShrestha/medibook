import http from "http";
import { conf } from "./src/config/config.js";
import dbConection from "./src/db/dbCon.js";
import { CloudConnect } from "./src/config/cloudinary.js";
import app from "./src/app.js";

const server = http.createServer(app);
try {
  CloudConnect();
  dbConection().then((res) => {
    if (res) {
      server.listen(conf.port, (err) => {
        if (err) {
          throw new Error("Server:", "Server Error");
        }
        console.log("Db Connected !");
        console.log("Running on port: " + conf.port);
      });
    } else {
    }
  });
} catch (error) {
  console.log("Server:", error);
}
