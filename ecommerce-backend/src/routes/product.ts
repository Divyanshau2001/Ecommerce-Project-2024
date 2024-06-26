import express from "express";
import { newUser, getAllUsers, getUser, deleteUser } from "../controllers/user.js";
import { adminOnly } from "../middleware/auth.js";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getSingleProduct, getlatestProducts, newProduct, updateProduct } from "../controllers/product.js";
import { singleUpload } from "../middleware/multer.js";

const app = express.Router();

//Create new Product   api/v1/product/new
app.post("/new",adminOnly ,singleUpload , newProduct);

app.get("/latest",getlatestProducts);

app.get("/all",getAllProducts);

app.get("/categories",getAllCategories);

app.get("/admin-products",getAdminProducts);

app.route("/:id").get(getSingleProduct).put(adminOnly,singleUpload,updateProduct).delete(adminOnly,deleteProduct);

export default app;