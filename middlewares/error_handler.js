const errorHandleMidlware = (req, re, next, err) => {
  console.log(err);
  return res
    .status(500)
    .json({ msg: 'something went wrong,Pls try again later' });
};

module.exports = errorHandleMidlware;
