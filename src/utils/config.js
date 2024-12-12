import "dotenv/config";

const config = {
  port: process.env.PORT || 8000,
  apiKey: process.env.API_KEY,
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
  email: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    from: process.env.EMAIL_FROM,
  },
};

export default config;
