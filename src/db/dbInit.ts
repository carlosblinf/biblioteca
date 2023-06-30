import { sequelizeConnection } from "./index";
import { Book } from "./models/book.model";

const isDev = process.env.NODE_ENV === 'development';

export default async function connectDB() {
    try {
      await sequelizeConnection.sync({force: isDev});
      await Book.create({name: "vivo", isbn:"vivo123", lend: false});
      await Book.create({name: "vivo1", isbn:"vivo1234", lend: false});
      
      console.log("✅ Connection has been established successfully.");
    } catch (error) {
        console.log("Unable to connect to the database:", error);
    }
}