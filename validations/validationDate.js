const Joi = require('@hapi/joi');
const express = require('express');
const router = express.Router();

const dateSchema = Joi.object({
    departure: Joi.string().required(), 
    arrival: Joi.string().required()
})


router.use('/getFlights',(req, res, next) => {
    
    const { error } = (dateSchema.validate(req.body));
    if (error) return res.send(error);
    next()
})


module.exports = router;