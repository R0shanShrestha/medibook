import "dotenv/config";

export const conf = {
  port: process.env.PORT || 1234,
  mongoUri: process.env.MONGO_URI,
  CloudName: process.env.CLOUDINARY_CLOUD_NAME,
  CloudKey: process.env.CLOUDINARY_API_SECRET,
  CloudApiKey: process.env.CLOUDINARY_API_KEY,
  adminEmail: process.env.ADMIN_EMAIL,
  adminPass: process.env.ADMIN_PASS,
  jwtKey: process.env.JWT_SECRET,
};
