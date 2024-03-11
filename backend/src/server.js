import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import foodRouter from './Routers/Food.router.js';
import userRouter from './Routers/User.router.js';
import orderRouter from './Routers/Order.router.js'
import {dbconnect} from './config/database.config.js'
dbconnect();

const app= express();
app.use(express.json());

app.use(
    cors({
        credentials:true,
        origin: ['http://localhost:3000'],
    })
);



app.use('/api/foods',foodRouter)
app.use('/api/users',userRouter)
app.use('/api/orders',orderRouter)

const PORT =5000;
app.listen(PORT,()=>{
    console.log('listening on port '+PORT)
});
