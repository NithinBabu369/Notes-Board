import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/ratelimit.js";
import cors from 'cors';

dotenv.config();




const app = express();

app.use(cors({
    orgin: "http://localhost:5173"
}));
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes",notesRoutes);

const PORT = process.env.PORT || 3001;


connectDB().then(() =>{

    app.listen(PORT, ()=> {
        console.log(`server listening on port ${PORT}`)
    });
});




