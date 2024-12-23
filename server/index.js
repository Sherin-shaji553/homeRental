 import express from 'express'
 import dotenv from 'dotenv'
 import cors from 'cors'
 import mongoose from 'mongoose'


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

