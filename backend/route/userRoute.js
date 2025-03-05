import express from "express";
import {
  deleteUserById,
  getAllUserdata,
  getsingleUserById,
  loginUser,
  RegisterUser,
  updateUserById,
} from "../controller/userController.js";
const router = express.Router();

router.post("/registor", RegisterUser);
router.post("/login", loginUser);
router.get("/", getAllUserdata);
router.get("/:id", getsingleUserById);
router.patch("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;
