import { NextFunction, Request, Response } from "express";

export interface NewUserRequestBody {
    name: string;
    email: string;
    photo: string;
    gender: string;
    _id: string;
    dob: string;
}

export type ControllerType = (
    req: Request<{}, {}, NewUserRequestBody>,
     res: Response, 
     next: NextFunction) 
     => Promise<Response<any, Record<string, any>> | undefined>;