import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import rateLimit from "express-rate-limit";

import config from "./src/utils/config.js";
import routes from "./src/utils/routes.js";

// initialize app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// rate limit
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // Limit requests per 15 minutes
    max: 50, // Allow maximum 50 requests per window
    message: {
      message: "Too many requests. Please try again later.",
    },
  })
);

// routes
app.use(routes);

// listen and start server
const port = process.env.PORT || config.port;
app.listen(port, () => {
  try {
    console.log(`Server running on 'http://localhost:${port}'`);
  } catch (error) {
    throw error;
  }
});

export default app;
