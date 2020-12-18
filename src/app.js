const path = require('path');
const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const flash = require('connect-flash');
const compression = require('compression');
const homeRouter = require('./routes/home');
const authRouter = require('./routes/auth');
require('dotenv').config();

const app = express();

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  unset: 'destroy',
}));
app.use(flash());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/static')));

app.use('/', homeRouter);
app.use('/auth', authRouter);

module.exports = app;
