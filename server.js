// imports 


import express from 'express'

import { pokemons } from './data/pokemon-data.js'


// create express app 

const app = express()


//configure app w app.set
app.set('view engine', 'ejs')


//mount middleware w app.use



//mount routes
app.get('/', function(req, res) {
  res.send('<h1>Hello, dear instructors</h1>')
})


app.get('/home', function(req, res) {
  res.render('home')
})


app.get('/pokemon', function(req, res) {
  res.render('pokemon/index.ejs', {
    pokemons: pokemons
  })
})


//tell app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000')
})