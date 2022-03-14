const mongoose = require('mongoose');

const connectDb = (uri) => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log('db connected sucessfully');
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDb;
