import { Router } from "express";

const routes = Router();

// main routes
routes.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "FJKT48 API",
  });
});
routes.get("/hello", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello World!",
  });
});

export default routes;
