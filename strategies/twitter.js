const TwitterStrategy = require("passport-twitter").Strategy;
const insertProfileDB = require("../utils/insertProfileDb");

require("dotenv").config();

const strategy = new TwitterStrategy(
  {
    consumerKey: process.env.TWITTER_ID,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: "http://localhost:8000/auth/twitter/callback",
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
