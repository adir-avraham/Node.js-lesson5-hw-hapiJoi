const express = require('express');
const router = express.Router();
const writeTofile = require('../utils/writeTofile');
const validation = require('../validations/validations')
const fs = require('fs')
const data = fs.readFileSync('users.json')
const users = JSON.parse(data);




router.use('/', validation);



router.post('/register',(req, res, next) => {
    const {userName, password} = req.body;    
    users.push({userName, password});
    writeTofile('users.json', users );
    res.send("User registered successfully");
})


module.exports = router;