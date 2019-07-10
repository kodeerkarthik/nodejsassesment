import express from 'express'
import routes from './src/routes/downloadRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
// import downloadModel from './src/models/downloadModel'
 
const app = express()
const PORT = 8000
 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/usertable')
// mongoose.connect('mongodb://localhost:27017/todo-app')
 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
 
routes(app)
 
app.listen(PORT, () => {
    console.log(`you are server is running on ${PORT}`);
})

//
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var exphbs = require('express-handlebars');
// var expressValidator = require('express-validator');
// var flash = require('connect-flash');
// var session = require('express-session');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var mongo = require('mongodb');
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/loginapp');
// var db = mongoose.connection;

// //Init app
// var app = express();

// var routes = require('./routes/index');
// var users = require('./routes/users');

// app.use('/', routes);
// app.use('/users', users);


// // Set Port
// app.set('port', (process.env.PORT || 3002));

// app.listen(app.get('port'), function(){
// console.log('Server started on port ' + app.get('port'));
// });