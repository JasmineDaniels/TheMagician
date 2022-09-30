const express = require('express');
const db = require('./config/connection');
const path = require('path')
const routes = require('./controllers')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(express.static(path.join(__dirname, 'client')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
  app.use(express.static('public'))
}

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(routes)
//require(routes)(app);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`The Magician server running on port ${PORT}!`);
    });
});