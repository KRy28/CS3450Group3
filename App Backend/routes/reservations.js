const express = require('express');
const router = express.Router();

const { Reservation } = require('../database/models')

router.get('/', function(req, res, next) {
  res.json(['/json', '/add']);
});
/*
router.param('car', 'start', 'stop', function(req, res, next, car, start, stop) {
    const car_id = parseInt(car);
    //need to set const for start and end dates
    const start_date = new date(start);
    const end_date = new date(stop);
    req.car = car_id;
    req.start = start_date;
    req.stop = stop_date;
    next();
   
});*/

router.get('/json', async function(req, res, next) {
  const reservations = await Reservation.findAll()
  res.json(reservations);
});

router.get('/add/:car/:start/:stop', async function(req, res, next) {
  const start_date = new Date(req.params.start);
  const stop_date = new Date(req.params.stop);
  const car_id = parseInt(req.params.car);
  const reservation = await Reservation.create({
    start: start_date,
    stop: stop_date,
    //person_id: req.user.id,
    person_id: 1,
    car_id: car_id
  })
});

module.exports = router;
