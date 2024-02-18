import express from "express";
import path from "node:path";
import cookieParser from "cookie-parser";
import logger from "./loggers/loggerAdapter.js";
import * as url from "url";
import cors from "cors";
import errorMiddleware from "./middlewares/error.mw.js";
import apiRouter from "./routes/api.router.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

let app = express();

app.use(cors());
app.use(logger());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "build")));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/cards", (req, res) => {
  res.send("all cards");
});

app.put("/cards/:id", (req, res) => {
  res.send(`card updated with id ${req.params.id}`);
});

app.post("/cards", (req, res) => {
  res.send("Card created");
});

app.get("/error", (req, res) => {
  throw new Error("Error Occurred");
});

app.use("/api", apiRouter);
app.use(errorMiddleware);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
export default app;
