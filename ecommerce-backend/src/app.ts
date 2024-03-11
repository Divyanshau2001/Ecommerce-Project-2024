import express, { NextFunction, Response, Request } from 'express'
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middleware/error.js';

//importing routes
import userRoute from './routes/user.js'
import productRoute from './routes/product.js'


const port = 4000;

connectDB();
const app = express();

app.use(express.json());

app.get("/", (req,res) => { 
    res.send("API is working with /api/v1");
});

//using routes
app.use("/api/v1/user", userRoute);                                                      
app.use("/api/v1/product", productRoute);                                                      

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Express is working on localhost http://localhost:${port}`)
})