import { sequelizeConnection } from "./index";
import { Book } from "./models/book.model";

const isDev = process.env.NODE_ENV === 'test';

export default async function connectDB() {
    try {
      await sequelizeConnection.sync({force: isDev});
      if (isDev) {
        await Book.create({name: "Learn React", isbn:"305-598-21508-8", lend: false});
        await Book.create({name: "The Truth", isbn:"443-598-21508-8", lend: false});
      }

      console.log("✅ Connection has been established successfully.");
    } catch (error) {
        console.log("Unable to connect to the database:", error);
    }
}