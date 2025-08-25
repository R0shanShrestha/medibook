import app from "./src/app.js";
import { conf } from "./src/config/config.js";
import dbConection from "./src/db/dbCon.js";
import { CloudConnect } from "./src/config/cloudinary.js";

// Async initialization
const init = async () => {
  try {
    await dbConection(); // wait for DB
    console.log("✅ Database connected");

    CloudConnect(); // initialize Cloudinary
    console.log("✅ Cloudinary ready");
  } catch (err) {
    console.error("❌ Initialization error:", err.stack || err.message);
  }
};

init();

// ✅ Run locally only
if (process.env.NODE_ENV !== "production") {
  app.listen(conf.port, () => {
    console.log(`Server running locally on port ${conf.port}`);
  });
}

// ✅ Export app for Vercel serverless
export default app;
