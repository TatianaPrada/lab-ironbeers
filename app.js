const express = require('express');
const hbs = require('hbs');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
//const path = require('path');


const app = express();
const punkAPI = new PunkAPIWrapper();



//Middleware for the view engine

app.set('view engine', 'hbs');
app.set("views", __dirname + "/views")
app.use(express.static('public'));
hbs.registerPartials((__dirname, 'views/partials'));


//app.set('views', path.join(__dirname, 'views'));
//app.use(express.static(path.join(__dirname, 'public')));


// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', (req, res)=>{
  punkAPI
  .getBeers()
  .then(beersFromApi => res.render('beers', {beersFromApi}))
  .catch(error => console.log(error));
})

app.get('/random-beer', (req, res) => {
  punkAPI
  .getRandom()
  .then(responseFromAPI => res.render('random-beer', {responseFromAPI}))
  .catch(error => console.log(error));
});



app.listen(4000, () => console.log('🏃‍ on port 4000'));
