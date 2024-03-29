const GoogleStrategy = require('passport-google-oauth2').Strategy
require('dotenv').config();

const strategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: 'http://localhost:8000/auth/google/callback'
}, function(accessToken, refreshToken, profile, cb){
    console.log("Got response from google = " + JSON.stringify(profile));
    return cb(null, profile);
})

module.exports = strategy;