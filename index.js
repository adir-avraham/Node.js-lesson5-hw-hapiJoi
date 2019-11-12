require('dotenv').config()
const express = require('express');
const api = express();


api.listen(process.env.PORT, (err) =>{
    if (err) return console.log(err)
    console.log(`Api is listening to port: ${process.env.PORT}`)
})




