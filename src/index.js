import mongoose from "mongoose";
import express from "express";
const app = express();
const port = '8000';

(async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/youtube-clone');
        app.on("error", (error) => {
            console.log("Err: ", error);
            throw error;
        })
        app.listen(port, ()=> {
            console.log(`App is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
})();