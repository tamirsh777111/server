// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
import express from "express";
import path from "node:path";
import cookieParser from "cookie-parser";
// import logger from "morgan";
// import Chalk from "chalk";
import logger from "./loggers/loggerService.js";
import * as url from "url";
import cors from "cors";
import errorMiddleware from "./middlewares/error.mw.js";
import apiRouter from "./routes/api.router.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

let app = express();

// console.log(__dirname);
app.use(cors());
app.use(logger());
// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use((req, res, next) => {
//   console.log("your request is: ", req.url);
//   next();
// });

// app.use((req, res, next) => {
//   res.send("your request is done!!!");
//   next();
// });

// app.use((req, res, next) => {
//   console.log(req.headers);
//   next();
// });

// app.get("/api/cards", (req, res) => {
//   res.status(401).send("your request is done!!");
// });

// app.get("/user", (req, res) => {
//   res.send({ name: "user", age: 55 });
// });

// app.post("/", (req, res) => {
//   res.send([
//     { name: "user", age: 55 },
//     { name: "second", age: 3 },
//   ]);
// });

// app.delete("/1", (req, res) => {
//   res.send("user deleted");
// });

// app.put("/2", (req, res) => {
//   res.send("user was updated");
// });

// app.path("/3", (req, res) => {
//   res.send("user like post");
// });

// app.get("/cards/:cardId", (req, res) => {
//   console.log("params:", req.params);
//   console.log("query:", req.query);
//   res.send("done");
// });

// app.get("/cards", (req, res) => {
//   console.log(req.query);
//   res.send("your filter " + req.query);
// });

app.get("/cards", (req, res) => {
  res.send("all cards");
});

app.put("/cards/:id", (req, res) => {
  res.send(`card updated with id ${req.params.id}`);
});

app.post("/cards", (req, res) => {
  console.log(req.body);
  res.send("Card created");
});

app.get("/error", (req, res) => {
  throw new Error("Error Occurred");
});

// app.use((err, req, res, next) => {
//   console.log(Chalk.red(err.message));
//   res.status(500).send(err.message);
// });

app.use("/api", apiRouter);
app.use(errorMiddleware);

// module.exports = app;
export default app;
