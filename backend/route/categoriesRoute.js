import express from 'express';
import { CreateCategories, deleteCategoryById, getAllCategories, getSingleCategoryById, updateCategoryById } from '../controller/categoriesController.js';
const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: 'uploads/' })
// Create category
router.post("/",upload.single("imgurl"), CreateCategories);
// get all categories 
router.get("/",getAllCategories);
// get single category 
router.get("/:id",getSingleCategoryById);
// update category  
router.patch("/:id",updateCategoryById);
// delete category 
router.delete("/:id",deleteCategoryById); 


export default router;