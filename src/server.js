//const express = require('express');
import express from 'express';
const server = express();

import routerPayment from './routes/payment.routes.js';

const PORT = process.env.PORT || 3000;

server.use(express.json());
server.use("/api",routerPayment);

server.get("/",(req,res)=>{
    res.send("GET " + new Date());
});

server.post("/",(req,res)=>{
    res.send("POST " + new Date());
});

server.patch("/",(req,res)=>{
    res.send("PATCH " + new Date());
});

server.delete("/",(req,res)=>{
    res.send("DELETE " + new Date());
});

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});