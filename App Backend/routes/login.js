const express = require('express')
const router = express.Router()
const { Person } = require('../database/models')

const passport = require('passport')
const LocalStrategy = require('passport-local')

const { generateHashedPassword } = require('./helpers')
const crypto = require('crypto')
const strategy = new LocalStrategy(async (username, password, next) => {
  const person = await Person.findOne({ where: { username: username }})
  if (!person) {
    console.log('not found')
    return next(null, false, { message: 'Incorrect username or password.' })
  }
  generateHashedPassword(password).then((hashedPassword) => {
    if (!crypto.timingSafeEqual(person.hash, hashedPassword)) { // Is not timing agnostic, see crypto.timingSafeEqual for more secure version 
      return next(null, false, { message: 'Incorrect username or password.' })
    }
    return next(null, person)
  })
    .catch(err => {
      console.log(err, 'error')
      return next(err)
    })
})

passport.use(strategy)
passport.serializeUser((person, next) => {
  process.nextTick(() => {
    return next(null, {
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
    res.send('login success!!')
  }
)

module.exports = { router, passport }
