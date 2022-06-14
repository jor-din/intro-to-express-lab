// import modules

import express from 'express'
import { catbreed } from './data/cat-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')

// Mount Middleware (app.use)
app.get('/home', function(req, res) {
    res.render('home')
  })

app.get('/cat-data', function(req, res) {
    res.render('cat-data/index.ejs', {
        catbreed:catbreed
    })
})

// Mount routes

app.get('/', function(req, res) {
    res.send('<h1>hello, friend</h1>')
  })


// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})