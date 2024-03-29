const LocalStrategy = require('passport-local').Strategy;
const connection = require('../utils/dbInstance')
const bcrypt = require('bcrypt')

// logic to verify login
const strategy = new LocalStrategy({
    usernameField: 'emaillog',
    passwordField: 'passwordlog'
}, async function(email, password, done){
    try {
        const queryUser = await connection.query("SELECT * FROM users WHERE email=$1", [email])
        if (queryUser.rowCount <= 0){
            return done(null, false);
        }
        const passCheck = await bcrypt.compare(password, queryUser.rows[0].password);
        if (!passCheck){
            return done(null, false);
        }
        // if reached here, the user exists 
        return done(null, queryUser.rows[0]);
    } catch (error) {
        console.log(error);
        return done(error)
        
    }
})