const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const connectDb=require('./config/db');

//dot envconfiguration
dotenv.config();

//DB connection
connectDb();

//rest object
const app=express();

//middlewares
app.use(cors());

//client side sai jo data ata haii usko acess krna
app.use(express.json());

//jo bhe api hit ho rahe hai usko console mai dhikhana
app.use(morgan('dev'))

//route
//url= http://localhost:3000
app.use("/api/v1/auth",require("./routes/authRoutes"));
app.use("/api/v1/user",require("./routes/userRoutes"));
app.use("/api/v1/admin",require("./routes/adminRoutes"));




//port pehle env ko check kiya
const PORT=process.env.PORT || 3000;

//serverkochlane kai liye
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`);
});
