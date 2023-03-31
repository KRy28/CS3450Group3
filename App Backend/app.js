const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');



const indexRouter = require('./routes/index');

const app = express();

const cors = require('cors');

// Allow cross-origin requests
app.use(cors());

const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database/database_development'
});

setImmediate(async () => {
  try {
    await sequelize.authenticate()
    console.log('sequelize has been authenticated')
  } catch (err) {
    console.log('sequelize was not authenticated', err)
  }
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
