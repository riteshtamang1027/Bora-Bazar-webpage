import express from "express";
import mongoose from "mongoose";
import categoriesRoute from "./route/categoriesRoute.js";
import userRoute from './route/userRoute.js'
import "dotenv/config";
//app config
const app = express();
// middlewire
app.use(express.json());

// database connect
try {
  mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected successfully.");
} catch (error) {
  console.log("Something went wrong.");
}

app.use("/Categories", categoriesRoute);
app.use("/User",userRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.APP_PORT, () => {
  console.log(`{Server started at http://localhost:${process.env.APP_PORT} }`);
});
