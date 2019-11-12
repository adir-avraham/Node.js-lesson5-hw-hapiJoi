const users = require('../users.json')
const express = require('express');
const router = express.Router();


router.use('/user/login', (req, res, next)=>{

    const {userName, password} = req.body;
    const isLogin = users.find(user => user.userName === userName && user.password === password)
    if (!isLogin) return res.status(401).send("User name and/or password is incorrect");
    next();
})

router.post('/user/login', (req, res, next) =>{
    res.send("You are logged-in!!!")
})

module.exports = router;