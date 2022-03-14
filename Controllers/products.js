const getAllProducts = (req, res) => {
  res.status(200).json({ msg: 'allProducts' });
};

const getSingleProduct = (req, res) => {
  res.status(200).json({ msg: 'Single Product' });
};

exports.module = {
  getAllProducts,
  getSingleProduct,
};
