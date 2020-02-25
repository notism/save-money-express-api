const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

// const postRoute = require('./routes/post')
// app.use('/post', postRoute)

const userRoute = require('./routes/user')
app.use('/api/user', userRoute)

const tranRoute = require('./routes/transaction')
app.use('/api/tran', tranRoute)

app.get('/api',(req,res)=>{
    res.send('This in save money system REST API')
})


// connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, ()=>{
    console.log('MongoDB Connected...')
})

app.listen(3000,()=>console.log('Start on port 3000'));