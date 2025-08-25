import app from "./backend/src/app.js";
import { dbConection } from "./backend/src/db/dbCon.js";
import { CloudConnect } from "./backend/src/config/cloudinary.js";

// Initialize DB and Cloudinary
const init = async () => {
  try {
    await dbConection();  // wait for DB connection
    CloudConnect();        // initialize Cloudinary
    console.log("✅ Server initialized successfully");
  } catch (err) {
    console.error("❌ Initialization error:", err.message);
  }
};

init();

// Export app for Vercel
export default app;
