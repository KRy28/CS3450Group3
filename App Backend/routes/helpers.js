export const authcodes = {
  USER: 1,
  EMPLOYEE: 2,
  MANAGER: 3
}

export const isAuthenticated = (level) => (req, res, next) => {
  if (req.user && req.elevation >= level) {
    next(); // The user is authenticated
  } else {
    res.status(401).send('Not authenticated.');
  }
}
