import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
import path from "path";

const app = express();
app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json());
app.use(cors());
app.use(express.static(path.join("../frontend/build")))
app.use("/api/user",router)
app.use("/api/blog",blogRouter)



mongoose.connect('mongodb+srv://admin:bTwMy2WbteTKMn8g@cluster0.yea3jox.mongodb.net/?retryWrites=true&w=majority'
).then(()=>app.listen(3001)).then(()=>console.log("Connected to database and listening on PORT 5000")
).catch((err)=>{console.log(err)});
