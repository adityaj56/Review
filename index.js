const db = require('./config/mongoose');

const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({extended: true}));
const MongoStore = require('connect-mongo');


app.use(session({
    name: 'reviewDev',
    secret: 'itachi',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000*60*10)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost/review_dev',
        autoRemove: 'disabled'
    },function(err){
        console.log(err || 'connect-mongodb setup ok');
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`Error while connecting to the server: ${err}`);
        return;
    }
    console.log(`Server running on port: ${port}`);
});