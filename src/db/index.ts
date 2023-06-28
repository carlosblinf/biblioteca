import { Dialect, Sequelize } from 'sequelize'

const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'

const database = isTest ? process.env.TEST_DB_NAME as string : process.env.DB_NAME as string
const username = process.env.DB_USER as string
const host = process.env.DB_HOST || 'localhost'
const driver = process.env.DB_DRIVER as Dialect
const password = process.env.DB_PASSWORD

export const sequelizeConnection = new Sequelize(database, username, password, {
  host,
  dialect: driver
})

export default async function connectDB() {
  try {
    await sequelizeConnection.sync({ alter: isDev || isTest });
    console.log("✅ Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}