const express = require('express');
const router = express.Router();

const { Reservation } = require('../database/models')
const { Person } = require('../database/models')
const { Car } = require('../database/models')

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
  const car = await Car.findOne({ where: { id:car_id }}) 
  //try {
    const person = await Person.findOne({ where: { username: req.user.username}})
    const reservations = await Reservation.findAll({ where: { car_id: car_id }});
    function dateRangesIntersect(startA, endA, startB, endB) {
      return (startA <= endB && endA >= startB);
    };
    var check = true;
    for (var i = 0, size = reservations.length; i < size ; i++) {
      var item = reservations[i];
      var start = new Date(item.start)
      var stop = new Date(item.stop)
      if (dateRangesIntersect(start_date, stop_date, start, stop)) {
        check = false;
      }; 
    };
    const diffTime = Math.abs(stop_date - start_date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const cost = diffDays * car.rate; 

    console.log(car, car.rat) 
    if (check && person.wallet >= cost) {
      const reservation = await Reservation.create({
        start: start_date,
        stop: stop_date,
        person_id: req.user.id,
        car_id: car_id
      });
      person.wallet = person.wallet - cost;
      person.save();
      res.json("Success");
    } else if (!check) {
      res.json("OverlapErr");
    } else if (person.wallet < cost) {
      res.json("FundsErr");
    } else {
      res.json("unknownErr")
    }; 
  /*} catch(err) {
    res.json("LoggedOutErr")
  };*/
});

module.exports = router;
