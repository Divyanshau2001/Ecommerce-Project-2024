import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";
import ErrorHandler from "../utils/utility-class.js";

export const newUser = async(
    req: Request<{}, {}, NewUserRequestBody>,
    res: Response, 
    next: NextFunction) => {
    try {
        return next(new ErrorHandler("Custom Error handler", 5600));
        // return next(new ErrorHandler("My custom Error", 402));
        const {name, email, photo, gender,_id, dob} = req.body;
        const user = await User.create({name, email, photo, gender, _id, dob: new Date(dob)});
        return res.status(201).json({
            success: true,
            message: `Welcome , ${user.name}`,
        });
    }
    catch(error) {
        return res.status(400).json({
            success: false,
            message: error,
        });
    }
};