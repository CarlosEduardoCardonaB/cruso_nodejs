
//import express from 'express';
const express = require('express');

const app = express();

const ip_local = "192.168.2.13";
const port = "8080";

//app.use(express().json());

app.get('/', (request, response)=>{
    const ip = 
    request.headers['cf-connecting-ip']
    || request.headers['x-real-ip']
    || request.headers['x-forwared-for'] 
    || request.socket.remoteAddress || '';


    return response.json({
        ip, 
    });
});

app.listen(port, () => {
    console.log('Listening at http://'+ip_local+':'+ port+'/');
});

