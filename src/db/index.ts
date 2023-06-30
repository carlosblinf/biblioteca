import { Dialect, Sequelize } from 'sequelize';

const isTest = process.env.NODE_ENV === 'test'

const database = isTest ? process.env.TEST_DB_NAME as string : process.env.DB_NAME as string
const username = process.env.DB_USER as string
const host = process.env.DB_HOST || 'localhost'
const driver = process.env.DB_DRIVER as Dialect || 'mysql'
const password = process.env.DB_PASSWORD

export const sequelizeConnection = new Sequelize(database, username, password, {
  host,
  dialect: driver,
  logging: console.log,
})