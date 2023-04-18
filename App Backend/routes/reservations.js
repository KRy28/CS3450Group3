const express = require('express');
const router = express.Router();

const { Reservation } = require('../database/models')
const { Person } = require('../database/models')
const { Car } = require('../database/models')

router.get('/', function(req, res, next) {
  res.json(['/json', '/add']);
});


router.get('/get', async function(req, res, next) {i
  try {
    const reservations = await Reservation.findAll()
    res.json(reservations);
  } catch(err) {
    console.log(err);
    res.json("unknownFatalErr")
  };
});


router.get('/get/car/:car', async function(req, res, next) {
  // Api params: (car) | car :: int |
  const car_id = parseInt(req.params.car);
	
  // try loop to keep the backend running during deployment and testing 
  try {
  if (car == undefined) {
    res.json("CarIdErr");
  } else {
    const reservations = await Reservation.findAll({ where: { car_id: car_id}});
    res.json(reservations);
  };
  } catch(err) {
    console.log(err);
    res.json("unknownFatalErr");
  };
});


router.get('/get/user', async function(req, res, next) {
  try {
    if (req.user == undefined) {
      res.json("LoggedOutErr")
    } else {
      const person = await Person.findOne({ where: { username: req.user.username}})
      const reservations = await Reservation.findAll()
      res.json(reservations);
    };
  } catch(err) {
    console.log(err);
    res.json("unknownFatalErr");
  };
});


router.get('/json', async function(req, res, next) {
  const reservations = await Reservation.findAll()
  res.json(reservations);
});


router.get('/add/:car/:start/:stop', async function(req, res, next) {
  // Api params: (car,start,stop) | car :: int | start && stop :: date (in iso YYYY-MM-DD)
  const start_date = new Date(req.params.start);
  const stop_date = new Date(req.params.stop);
  const car_id = parseInt(req.params.car);
  

  // try loop to keep the backend running during deployment and testing
  try {
    const car = await Car.findOne({ where: { id:car_id }});
    if (car == undefined) {
      res.json("CarIdErr");
    } else if (req.user == undefined) {
      res.json("loggedOutErr")
    } else {
      // loading reservations and person for editing and quick checking
      const person = await Person.findOne({ where: { username: req.user.username}});
      const reservations = await Reservation.findAll({ where: { car_id: car_id }});
      
      if (person == undefined) {
        res.json("LoggedOutErr");
      } else {
      
        // function to check dates 
        function dateRangesIntersect(startA, endA, startB, endB) {
          return (startA <= endB && endA >= startB);
        };

        // check shows if time overlaps
        var check = true;

        // loops all reservations fo this car and checks for overlap
        for (var i = 0, size = reservations.length; i < size ; i++) {
	  var item = reservations[i];
          var start = new Date(item.start);
          var stop = new Date(item.stop);
          if (dateRangesIntersect(start_date, stop_date, start, stop)) {
            check = false;
	  }; 
        };

        // cost and time calculations
        const diffTime = Math.abs(stop_date - start_date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        const cost = diffDays * car.rate; 
	    
        // final error checking before release
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
          res.json("unknownErr");
        };
      };
    };
  } catch(err) {
    console.log(err);
    res.json("unknownFatalErr");
  };
});

module.exports = router;
