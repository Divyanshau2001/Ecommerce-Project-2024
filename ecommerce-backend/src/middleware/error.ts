import { NextFunction, Response, Request } from "express";


export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    err.message ||= "";
    
    return res.status(400).json({
        success: true,
        message: err.message,
    });
};