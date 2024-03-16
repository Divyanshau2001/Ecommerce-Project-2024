import { TryCatch } from "../middleware/error.js";
import { Product } from "../models/product.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";
export const newProduct = TryCatch(async (req, res, next) => {
    const { name, price, stock, category } = req.body;
    const photo = req.file;
    if (!photo)
        return next(new ErrorHandler("Please add Photo", 400));
    if (!name || !price || !stock || !category) {
        rm(photo.path, () => {
            console.log("Delted");
        });
        return next(new ErrorHandler("Please enter All Fields", 400));
    }
    await Product.create({
        name,
        price,
        stock,
        category: category.toLowerCase(),
        photo: photo.path,
    });
    return res.status(201).json({
        success: true,
        message: "Product Created Successfully",
    });
});
export const getlatestProducts = TryCatch(async (req, res, next) => {
    const products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
    return res.status(200).json({
        success: true,
        products,
    });
});
export const getAllCategories = TryCatch(async (req, res, next) => {
    const products = await Product.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
        success: true,
        products,
    });
});
export const getAdminProducts = TryCatch(async (req, res, next) => {
    const categories = await Product.distinct("category");
    return res.status(200).json({
        success: true,
        categories,
    });
});
export const getSingleProduct = TryCatch(async (req, res, next) => {
    // const id = req.params.id;
    const product = await Product.findById(req.params.id);
    if (!product)
        return next(new ErrorHandler("Product not found", 404));
    return res.status(200).json({
        success: true,
        product,
    });
});
export const updateProduct = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    const { name, price, stock, category } = req.body;
    const photo = req.file;
    const product = await Product.findById(id);
    if (!product)
        return next(new ErrorHandler("Product not found", 404));
    if (photo) {
        rm(photo.path, () => {
            console.log("Old Delted");
        });
        product.photo = photo.path;
    }
    if (name)
        product.name = name;
    if (stock)
        product.stock = stock;
    if (category)
        product.category = category;
    if (price)
        product.price = price;
    await product.save();
    return res.status(200).json({
        success: true,
        message: "Product Updated Successfully",
    });
});
export const deleteProduct = TryCatch(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    const photo = req.file;
    // const id = req.params;
    if (!product)
        return next(new ErrorHandler("Product not found", 404));
    if (photo) {
        rm(photo.path, () => {
            console.log("Old Delted");
        });
        // product.photo = photo.path
    }
    await product.deleteOne();
    if (photo) {
        rm(photo.path, () => {
            console.log("Product Delted");
        });
        product.photo = photo.path;
    }
    return res.status(200).json({
        success: true,
        message: "Product deleted Successfully",
    });
});
