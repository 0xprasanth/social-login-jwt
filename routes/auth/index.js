const express = require("express");
const authRouter = express.Router();
// send to google server for auth
const passport = require("passport");

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: '/failure', successRedirect: '/'})
);

module.exports = authRouter;
