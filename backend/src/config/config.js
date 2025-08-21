import "dotenv/config";

export const conf = {
  port: process.env.PORT || 1234,
  mongoUri: process.env.MONGO_URI,
  CloudName: process.env.Cloud_Name,
  CloudKey: process.env.Cloud_Secret_key,
  CloudApiKey: process.env.Cloud_Secret_Api,
  adminEmail: process.env.Admin_Email,
  adminPass: process.env.Admin_Pass,
  jwtKey: process.env.Jwt_key,
};
