const express = require('express');
const session= require('express-session')
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const passport = require('passport')
const authRoutes = require('./routes/auth/')
const googleStrategy = require('./strategies/google')
const connection = require('./utils/dbInstance.js')
const localStrategy = require('./strategies/local')
const twitterStrategy = require('./strategies/twitter')
const passportUtils = require('./utils/passportUtils')

const app = express();

// middlewares
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use(session({
    secret: "someString",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 5000 }

}))

app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session())
passport.use(googleStrategy)
passport.use(localStrategy)
passport.use(twitterStrategy)
app.use(express.static('public'));
app.use(express.static(path.join(__dirname + '/node_modules/bootstrap/dist')));

// routes
app.get('/', async (req, res) => {
    if(req.isAuthenticated()){
        // return res.json('<h1>Logged in successfully</h2>')
        return res.json(req.user);
    }
    res.sendFile(path.join(__dirname, 'public', 'auth.html'));
});

app.use('/auth', authRoutes)

connection.connect().then(connInfo => {
    console.log('Connected to DB');
    app.listen(8000, () => {
        console.log('app listening port 8000');
    });

}).catch(err => {
    console.error("Error connecting to DB");
    console.error(err);
    process.exit(1);
});

