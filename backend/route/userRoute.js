import express from "express";
import {
  deleteUserById,
  getAllUserdata,
  getsingleUserById,
  loginUser,
  RegisterUser,
  updateUserById,
} from "../controller/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.post("/registor", RegisterUser);
router.post("/login", loginUser);
router.get("/",getAllUserdata);
router.get("/:id",verifyToken, getsingleUserById);
router.patch("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;
