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
  passport.authenticate('local', { failWithMessage: true }),
  function(req, res) {
    res.json(req.user)
  }
)

router.post('/signup', async function (req, res) {
  const exists = await Person.findOne({ where: { username: req.body.username }})
  if (exists) {
    res.status(409).sendMessage('A user already exists with that username')
  } else {
    const newPerson = await Person.create({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       email: req.body.email,
       hash: await generateHashedPassword(req.body.password),
       username: req.body.username,
       wallet: 0,
       elevation: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
    })
    req.login(newPerson.username, err => {
      if (err) return next(err)
      res.json(req.user)
    })
  }
})

module.exports = { router, passport }
