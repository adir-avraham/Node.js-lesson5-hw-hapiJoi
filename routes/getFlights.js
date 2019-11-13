const express = require('express');
const router = express.Router();
const flights = require('../flights.json');
const moment = require('moment');
const validationDate = require('../validations/validationDate');


router.use('/', validationDate)


router.get('/getFlights', (req, res, next) => {
    const { departure, arrival } = req.body;
    const d =  moment(departure, 'DD-MM-YYYY').format('YYYY-MM-DD')
    const a =  moment(arrival, 'DD-MM-YYYY').format('YYYY-MM-DD')
    
    const foundFlights = flights.filter(flight => !moment(d).isAfter(moment(flight.departure, 'DD-MM-YYYY').format('YYYY-MM-DD')) && !moment(a).isBefore(moment(flight.arrival, 'DD-MM-YYYY').format('YYYY-MM-DD')))
    
    if (foundFlights.length < 1) return res.send("not resultes found")
    res.send(foundFlights)
})


module.exports = router;