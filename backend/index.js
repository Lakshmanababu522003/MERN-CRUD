const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user')

app.use(express.json());
app.use(cors());

app.use('/users' , userRouter);

mongoose.connect('mongodb://localhost:27017/crud')
  .then(() => {
    console.log('Connected to the database');
    // Do something after successful connection
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    // Handle the connection error
  });

app.listen(4000,() =>{
    console.log('server start');
});