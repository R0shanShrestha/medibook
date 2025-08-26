import app from "./src/app.js";
import http from "http";
import { conf } from "./src/config/config.js";
import { dbConection } from "./src/db/dbCon.js";
import { CloudConnect } from "./src/config/cloudinary.js";

const init = async () => {
  try {
    await dbConection();
    console.log("✅ Database connected");

    CloudConnect();
    console.log("✅ Cloudinary ready");
  } catch (err) {
    console.error("❌ Initialization error:", err.stack || err.message);
  }
};

init();

if (NodeEnv !== "production") {
  const server = http.createServer(app);
  server.listen(conf.port, () => {
    console.log(`Server running locally on port ${conf.port}`);
  });
} else {
  console.log("hi");
}

export default app;
