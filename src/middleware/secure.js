import config from "../utils/config.js";

if (!process.env.API_KEY) {
  throw new Error("API_KEY is not defined");
}

const apiKey = process.env.API_KEY || config.apiKey;

const secure = (req, res, next) => {
  if (req.headers["x-api-key"] !== apiKey) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  next();
};

export default secure;
