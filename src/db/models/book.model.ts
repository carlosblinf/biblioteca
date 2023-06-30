import { DataTypes, Model } from 'sequelize';
import * as z from 'zod';

import {sequelizeConnection } from '../index';


const BookSchema = z.object({
  id: z.number().positive().optional(),
  name: z.string().min(3, { message: 'name is required and more than 3' }),
  isbn: z.string().min(6, { message: 'ISBN is required and more than 6' }),
  available: z.boolean().optional(),
});

type BookSchema = z.infer<typeof BookSchema>;

const BookUpdate = z.object({
    name: z.string().min(3, { message: 'name is required and more than 3' }).optional(),
    isbn: z.string().min(6, { message: 'ISBN is required and more than 6' }).optional(),
    available: z.boolean().optional(),
  });;

type BookUpdate = z.infer<typeof BookUpdate>;

class Book extends Model<BookSchema> {}
Book.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
  sequelize: sequelizeConnection,
});


export  { Book, BookSchema, BookUpdate }