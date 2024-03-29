const LocalStrategy = require('passport-local').Strategy;
const connection = require('../utils/dbInstance')
const bcrypt = require('bcrypt')


const strategy = new LocalStrategy({
    usernameField: 'emaillog',
    passwordField: 'passwordlog'
}, function(email, password, done){

})