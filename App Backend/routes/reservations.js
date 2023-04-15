const express = require('express');
const router = express.Router();

const { Reservations } = require('../database/models')

router.get('/json', async function(req, res, next) {
  const reservations = await Reservation.findAll()
  res.json(reservations);
});

module.exports = router;
