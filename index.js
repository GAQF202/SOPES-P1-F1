'use strict';

const {LogsR} = require('./fatherModel')

const express = require('express');

// SOCKETS
const socketIo = require('socket.io');
const http = require('http');

// EXPRESS
const app = express();

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
        credentials: false
      }
  });

function socketConnection(dates){
    io.on('connection', (socket)=>{
        //socket.emit('mensajes',{ver:"hola"});
        socket.emit('message',dates)
    });
}

server.listen(8080, function(){
    console.log('Server up');
});




const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://mongoadmin:1234@35.226.238.21:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'SO1_Proyecto1';

const ver = async () =>{
    await client.connect();
      //console.log('Connected successfully to server');
      const db = client.db(dbName);
      const collection = db.collection('Logs');
      const findResult = await collection.find({}).toArray();
      //console.log('Found documents =>', findResult);
      socketConnection(findResult);
}
ver();