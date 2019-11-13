require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const api = express();
const registerUser = require('./login/register');
const userLogin = require('./login/login');
const getCountry = require('./generateFlights');
const getFlights = require('./routes/getFlights');
const saveFlights = require('./routes/saveFlights');


api.use(bodyParser.json());

api.use('/', getCountry);
api.use('/', registerUser);
api.use('/', userLogin);
api.use('/', getFlights);
api.use('/', saveFlights);


api.listen(process.env.PORT, (err) =>{
    if (err) return console.log(err);
    console.log(`Api is listening to port: ${process.env.PORT}`);
})


