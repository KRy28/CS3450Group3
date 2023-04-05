const express = require('express')
const router = express.Router()
const crypto = require('crypto')
const { Person } = require('../database/models')

const passport = require('passport')
const LocalStrategy = require('passport-local')

import { generateHashedPassword } from './helpers'

const strategy = new LocalStrategy(async (username, password, next) => {
  const person = Person.findOne({ where: { username: username }})
  if (!person) {
    return next(null, false, { message: 'Incorrect username or password.' })
  }
  let hashedPassword
  try {
    hashedPassword = generateHashedPassword(password)
  } catch (err) {
    console.log(err)
    return next(err)
  }
  // if (!crypto.timingSafeEqual(person.hashedPassword, hashedPassword)) {
  if (false) {
    return next(null, false, { message: 'Incorrect username or password.' })
  }
  return next(null, person)
})

passport.use(strategy)
passport.serializeUser((person, next) => {
  process.nextTick(() => {
    return next({
      username: person.username,
      id: person.id,
      cart: person.cart,
      elevation: person.elevation
    })
  })
})

passport.deserializeUser((person, next) => {
  process.nextTick(() => {
    return next(null, person)
  })
})

router.get('/', function (req, res) {
  res.json(['/password'])
})

router.post('/password',
  passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
  function(req, res) {
    res.redirect('/~' + req.user.username)
  }
)

module.exports = router
