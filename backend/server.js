import express from "express";
import mongoose from "mongoose";
import categoriesRoute from "./route/categoriesRoute.js";
import productsRoute from "./route/productsRoute.js";

import userRoute from './route/userRoute.js'
import "dotenv/config";
import cors from 'cors'
//app config
const app = express();
// middlewire
app.use(express.json());
app.use(cors(
  {
    origin: 'http://localhost:5173'   
  }
))

// database connect 
try {
  mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected successfully.");
} catch (error) {
  console.log("Something went wrong.");
}
 
app.use("/Categories", categoriesRoute);
app.use("/products",productsRoute)
app.use("/User",userRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
}); 

app.listen(process.env.APP_PORT, () => {
  console.log(`{Server started at http://localhost:${process.env.APP_PORT} }`);
});
