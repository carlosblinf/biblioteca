import { DataTypes,  Model, Optional } from 'sequelize';
import * as z from 'zod';

import {sequelizeConnection } from '../index';


const BookSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(3, { message: 'name is required and more than 3' }),
  isbn: z.string().min(6, { message: 'ISBN is required and more than 3' }),
  lend: z.boolean(),
});

type BookSchema = z.infer<typeof BookSchema>;
type BookInput = Optional<BookSchema, 'id'>;

class Book extends Model<BookSchema, BookInput> {}
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
        type: DataTypes.STRING
    },
    lend: {
        type: DataTypes.BOOLEAN
    }
}, {
  sequelize: sequelizeConnection,
});


export  { Book, BookInput, BookSchema }