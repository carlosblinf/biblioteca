import { DataTypes, Model } from 'sequelize';
import * as z from 'zod';

import {sequelizeConnection } from '../index';
import { Book } from './book.model';
import { Reader } from './reader.model';


const LendSchema = z.object({
  id: z.number().positive().optional(),
  dateReturn: z.date(),
});

type LendSchema = z.infer<typeof LendSchema>;

const LendUpdate = z.object({
  id: z.number().positive().optional(),
  bookId: z.number().positive().optional(),
  readerId: z.number().positive().optional(),
  dateReturn: z.date().optional(),
  });;

type LendUpdate = z.infer<typeof LendUpdate>;

class Lend extends Model<LendUpdate> {}
Lend.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  dateReturn: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  // readerId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: Reader, // 'Actors' would also work
  //     key: 'id'
  //   },
  // },
  // bookId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: Book, // 'Actors' would also work
  //     key: 'id'
  //   },
  // },
}, {
  sequelize: sequelizeConnection,
});
Lend.belongsTo(Book, {
  foreignKey: "bookId",
  as: "Book",
});
Lend.belongsTo(Reader, {
  foreignKey: "readerId",
  as: "Reader",
});

export  { Lend, LendSchema, LendUpdate }