const express = require('express');
const router = express.Router();
const Joi = require('@hapi/joi');

const flightSchema = Joi.object({
    departure: Joi.string().required(),
    arrival: Joi.string().required(),
    flyingFrom: Joi.string().required(),
    flyingTo: Joi.string().required(),
    company: Joi.string().required()
})


router.use('/saveFlights', (req, res, next)=>{
    for (let i = 0; i< req.body.length; i++) {
        const {error} = (flightSchema.validate(req.body[i])) 
        if (error) return res.send(error);
    }
    next()
})



module.exports = router;