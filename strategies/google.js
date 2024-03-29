const GoogleStrategy = require("passport-google-oauth2").Strategy;
const insertProfileDB = require("../utils/insertProfileDb");

require("dotenv").config();

const strategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback",
  }, async function (accessToken, refreshToken, profile, cb) {
    /* 
        check if the user eith this ID exists in our database, 
        if not we register the user.
    */
    try {
      await insertProfileDB(profile);
    // console.log(profile)
    } catch (error) {
        
    }
    return cb(null, profile);
  }
);

module.exports = strategy;
