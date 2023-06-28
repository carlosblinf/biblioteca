import 'reflect-metadata';
import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import apiRoutes from './api/routes'
import * as middlewares from './middlewares';

const app = express();

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

export default app;