import app, { port} from './app'
import connectDB from './db/dbInit';

connectDB();

app.listen(port, async ()=>{
    console.log("Server running on port: ", port);
    
})