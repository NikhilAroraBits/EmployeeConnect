const express = require('express');
const connectDB = require('./config/db');


const app = express();

// DB connection
connectDB();


app.get('/', (req,res)=> res.send('API running'))


// if port is there in env file then will pick that otherwise 5000
const PORT = process.env.PORT || 5000; 

app.listen(PORT, ()=> console.log('server started on port '+ PORT ));