const Joi = require('@hapi/joi');
const express = require('express');
const router = express.Router();
const users = require('../users.json')


const userSchema = Joi.object({
    userName: Joi.string().min(5).max(10).pattern(/[!@#$]/).required(),
    password: Joi.string().min(4).max(4).required()
})


router.use('/register',(req, res, next) => {
    
    const { error } = (userSchema.validate(req.body));
    if (error) return res.send(error);
    next()
})

router.use('/register', (req, res, next) => {
    const {userName} = req.body;
    isUserExist = users.find(user => user.userName === userName);
    if (isUserExist) return res.send("User already existed");
    next()
})

module.exports = router;