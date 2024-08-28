import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./Routes/booksRoute.js";

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

// CORS Configuration
// app.use(cors({
//     origin: 'http://localhost:5555',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));

// Route to check server status
app.get('/', (req, res) => {
    console.log("Request received:", req.method, req.url);
    return res.status(200).send("Server is running");
});

// Mount the books route
app.use('/books', booksRoute);

// Connect to MongoDB and start the server
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err.message);
    });
