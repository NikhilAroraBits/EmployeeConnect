const express = require('express');
const connectDB = require('./config/db');


const app = express();

// DB connection
connectDB();

// Init middleware

app.use(express.json({extended:false}));

app.get('/', (req,res)=> res.send('API running'))

// Define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))



// if port is there in env file then will pick that otherwise 5000
const PORT = process.env.PORT || 5000; 

app.listen(PORT, ()=> console.log('server started on port '+ PORT ));