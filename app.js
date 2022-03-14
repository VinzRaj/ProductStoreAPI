require('dotenv').config();
const express = require('express');
const app = express();

const notFound = require('./middlewares/not_found');
const errorHandle = require('./middlewares/error_handler');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Helloo</h1><a>Store Api</a>');
});
app.use(notFound);
app.use(errorHandle);

const start = async () => {
  try {
    app.listen(3000, () => {
      console.log('server is listening');
    });
  } catch (error) {
    console.log(error);
  }
};
start();
