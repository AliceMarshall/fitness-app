const express = require('express');
const morgan  = require('morgan');
const app = express();

app.use(morgan('dev'));

app.set("views", `${__dirname}/views`);


app.all('*', (req, res, next) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  next();
});

app.get('/', (req, res) => {
  res.end('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.end('Welcome to the about page!');
});

app.get('*', (req, res) => {
  res.end('404!');
});

app.listen(3000, () => console.log('Express is up and running'));
