const express = require("express");
const authRouter = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const connection = require("../../utils/dbInstance");
const uuid4 = require("uuid4");

// send to google server for auth
// google router and strategy
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
  })
);

// local routes and register strategy

// Handle POST request to register a new user with local authentication
authRouter.post("/local/register", async (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  const full_name = req.body.fullname;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const query = await connection.query(
      "INSERT INTO users (user_id, provider, email, password, full_name) VALUES ($1, $2, $3, $4, $5)",
      [uuid4().toString(), "Local", email, hashedPassword, full_name]
    );

    res.status(200).json({
      success: true,
      message: "You have registered successfully, You can login now",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Error inserting into DB",
    });
  }
});

authRouter.post('/local/login', function handleLocalAuthentication{
  
})

module.exports = authRouter;
