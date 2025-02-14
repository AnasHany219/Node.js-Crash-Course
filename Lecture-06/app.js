const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// Connect to mongoDB && listen for requests
const dbURI = 'mongodb+srv://node-js:node-js@cluster0.axvpiou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI)
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}));
app.use(morgan('dev'));

// blog routes
app.use('/blogs', blogRoutes);

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404'
  });
});