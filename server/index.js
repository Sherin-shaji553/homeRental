 import express from 'express'
 import dotenv from 'dotenv'
 import cors from 'cors'
 import mongoose from 'mongoose'
 import authRoutes from './routes/auth.route.js'


 dotenv.config()
 
//momgodb connct
 mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to mongoDB");
    
 }).catch((err)=>{
    console.log(err);
    
 })
 const app = express()

 app.use(express.json())
 app.use(cors())
 app.use(express.static("public"))
 

 app.listen(3000, ()=>{
    console.log("Server is running on PORT 3000");
 })

app.use("/api/auth", authRoutes)

//error handler
app.use((err, req, res, next) =>{
   const statusCode = err.statusCode || 500
   const message = err.message || "Internal Server Error"

   return res.status(statusCode).json({
      success:false,
      statusCode,
      message
   })
})