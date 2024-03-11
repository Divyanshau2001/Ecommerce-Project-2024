import { TryCatch } from "../middleware/error.js";
import { Product } from "../models/product.js";
export const newProduct = TryCatch(async (req, res, next) => {
    const { name, price, stock, category } = req.body;
    const photo = req.file;
    await Product.create({
        name,
        price,
        category: category.toLowerCase(),
        stock,
        photo: photo?.path,
    });
    return res.status(201).json({
        success: true,
        message: "Product created successfully",
    });
});
