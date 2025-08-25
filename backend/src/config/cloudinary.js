import { v2 as cloudinary } from "cloudinary";
import { conf } from "./config.js";

export const CloudConnect = async () => {
  cloudinary.config({
    cloud_name: conf.CloudName,
    api_key: conf.CloudApiKey,
    api_secret: conf.CloudKey,
  });
};
