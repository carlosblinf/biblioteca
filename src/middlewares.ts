import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

import { ConflictError } from "./interfaces/ConflictError";
import { NotFoundError } from "./interfaces/NotFoundError";
import { RequestValidators } from "./interfaces/RequestValidators";

export function notFound(req: Request, res: Response, next: NextFunction) {
    res.status(404);
    const error = new Error(`Not Found - ${req.originalUrl}`);
    next(error);
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    let statusCode = res.statusCode !== 200 ? res.statusCode : 500;

    if (err instanceof NotFoundError || err instanceof ConflictError) {
        statusCode = err.getCode;
    }
    
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : '',
    });
}

export function validateRequest(validators: RequestValidators) {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            if (validators.params) {
                req.params = await validators.params?.parseAsync(req.params);
            }
            if (validators.body) {
                req.body = await validators.body?.parseAsync(req.body);
            }
            if (validators.query) {
                req.query = await validators.query?.parseAsync(req.query);
            }
            next()
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(422);
              }
              next(error);
        }
    };
}