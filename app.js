const express = require('express')
const passport = require('passport')
const app = express()
const port = 3000
require('./auth')

app.get('/auth/google',
    passport.authenticate('google', { scope:
     [ 'email', 'profile' ] }
));

app.get('/auth/google/callback',
    passport.authenticate('google', { 
     successRedirect: '/auth/google/success',
     failureRedirect: '/auth/google/failure'
}));

app.get('/', (req,res) => {
    res.sendFile('index.html', {root: '.'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
