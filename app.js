const express = require('express')
const passport = require('passport')
const session = require('express-session')
const app = express()
const port = 3000

require('./auth')

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
}))


app.use(passport.initialize());
app.use(passport.session())

app.get('/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/google/failure'
    }));


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' })
});


app.get('/auth/google/failure', (req, res) => {
    res.send("Something went wrong!")
});

app.get('/auth/protected', isLoggedIn, (req, res) => {
    let name = req.user.displayName;
    res.send(`Hello, ${name}`);
});

app.use('/auth/logout', (req, res) => {
    req.session.destroy();
    res.send('See you again!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

