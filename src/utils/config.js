import "dotenv/config";

const config = {
  port: process.env.PORT || 8000,
  apiKey: process.env.API_KEY,
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
};

export default config;
