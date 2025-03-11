import express from "express";
import {
  createProducts,
  deleteProductById,
  getAllProducts,
  getSingleProductById,
  updateProductById,
} from "../controller/productsController.js";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("imgurl"), createProducts);
router.get("/", getAllProducts);
router.get("/:id", getSingleProductById);
router.patch("/:id",upload.single("imgurl"), updateProductById);
router.delete("/:id", deleteProductById);

export default router;
