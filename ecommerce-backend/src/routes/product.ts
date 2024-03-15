import express from "express";
import { newUser, getAllUsers, getUser, deleteUser } from "../controllers/user.js";
import { adminOnly } from "../middleware/auth.js";
import { getlatestProducts, newProduct } from "../controllers/product.js";
import { singleUpload } from "../middleware/multer.js";

const app = express.Router();

app.post("/new",adminOnly ,singleUpload , newProduct);

app.get("/lastest",getlatestProducts);

export default app;