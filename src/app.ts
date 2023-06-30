import 'reflect-metadata';
import 'dotenv/config';

import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import apiRoutes from './api/routes'
import * as middlewares from './middlewares';

const app: Application = express();
export const port = process.env.PORT || 5000;

// Body parsing Middleware
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes

app.get('/', async(req: Request, res: Response): Promise<Response> => 
    res.status(200).send({ message: `Welcome to the Library API! \n Endpoints available at http://localhost:${port}/api/` }))

app.use('/api', apiRoutes)

// Middleware
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

export default app;