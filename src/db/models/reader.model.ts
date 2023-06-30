import { DataTypes, Model } from 'sequelize';
import * as z from 'zod';

import {sequelizeConnection } from '../index';


const ReaderSchema = z.object({
  id: z.number().positive().optional(),
  name: z.string().min(3, { message: 'name is required and more than 3' }),
});

type ReaderSchema = z.infer<typeof ReaderSchema>;

const ReaderUpdate = z.object({
    name: z.string().min(3, { message: 'name is required and more than 3' }).optional(),
  });;

type ReaderUpdate = z.infer<typeof ReaderUpdate>;

class Reader extends Model<ReaderSchema> {}
Reader.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
  sequelize: sequelizeConnection,
});


export  { Reader, ReaderSchema, ReaderUpdate }