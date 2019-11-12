require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const api = express();
const registerUser = require('./login/register');
const userLogin = require('./login/login');
const generateFlights = require('./generateFlights');


api.use(bodyParser.json());

api.use('/', registerUser);

api.use('/', userLogin);

api.listen(process.env.PORT, (err) =>{
    if (err) return console.log(err)
    console.log(`Api is listening to port: ${process.env.PORT}`)
})


