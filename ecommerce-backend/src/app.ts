import express from 'express'


//importing routes
import userRoute from './routes/user.js'

const port = 3000;
const app = express();

app.get("/", (req,res) => {
    res.send("API is working with  /api/v1");
})

//using routes
app.use("/api/v1/user", userRoute)

 
app.listen(port, () => {
    console.log(`Express is working on localhost http://localhost:${port}`)
})