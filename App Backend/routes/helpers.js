const crypto = require('crypto')

module.exports.authcodes = {
  USER: 1,
  EMPLOYEE: 2,
  MANAGER: 3
}

module.exports.isAuthenticated = (level) => (req, res, next) => {
  if (req.isAuthenticated() && req.user.elevation >= level) {
    next(); // The user is authenticated
  } else {
    res.status(401).send('Not authenticated.');
  }
}

module.exports.isTheUser = (userId) => (req, res, next) => {
  if (req.session.user?.id === userId) {
    next();
  } else {
    res.status(401).send('Not authenticated')
  }
}

module.exports.generateHashedPassword = async password => new Promise ((resolve, reject) => {
  crypto.pbkdf2(password, 'fixed salt lol', 310000, 32, 'sha256', (err, key) => {
    if (err) {
      reject(err)
    }
    resolve(key)
  })
})
