require('dotenv').config();
const express = require('express');
const app = express();

const notFound = require('./middlewares/not_found');
const errorHandle = require('./middlewares/error_handler');
const dbConnection = require('./Db/db_connect');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Helloo</h1><a href ="/api/v1/products">Store Api</a>');
});
app.use(notFound);
app.use(errorHandle);
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await dbConnection(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log('server is listening');
    });
  } catch (error) {
    console.log(error);
  }
};
start();
