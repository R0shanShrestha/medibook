const dotenv = require("dotenv");
dotenv.config();
module.exports.conf = {
  port: process.env.PORT,
};
