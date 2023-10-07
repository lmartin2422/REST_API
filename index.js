import express from 'express';  // imports express framework
const { Express } = express;
  
import bodyParser from "body-parser";  //  allows us to take incoming POST request

import userRoutes from './routes/users.js';  // brings that folder into this file for use

const app = express();  // initializes our express import
const PORT = 5501; // specifying your port location manually

app.use(bodyParser.json());

app.use('/users', userRoutes);  // allows everything in users.js to be used

app.get('/', (req, res) => res.send('Hello from homepage.')); 
// creates a route for the GET HTTP Method which displays as the index aka homepage
// req = request, res = response

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));


















/*  THIS CODE BELOW FINDS ANY AVAILABLE PORT AUTOMATICALLY
const http = require('http');
const express = require('express');
const app = express();

// Use process.env.PORT if available, or default to 5500
const port = process.env.PORT || 5500;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/