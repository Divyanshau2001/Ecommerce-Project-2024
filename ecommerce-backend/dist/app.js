import express from 'express';
import { connectDB } from './utils/features.js';
//importing routes
import userRoute from './routes/user.js';
import { errorMiddleware } from './middleware/error.js';
const port = 4000;
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API is working with /api/v1");
});
//using routes
app.use("/api/v1/user", userRoute);
app.use(errorMiddleware);
// app.use((err: Error, req: Request,res: Response,next: NextFunction) => {
//     return res.status(400).json({
//         success: true,
//         message: "Some Error"
//     });
// });
app.listen(port, () => {
    console.log(`Express is working on localhost http://localhost:${port}`);
});
