const products = require("../data/products");

const getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    data: product,
  });
};

const createProduct = (req, res) => {
  const { productName, category = "General", tone = "Professional" } = req.body;

  if (!productName) {
    return res.status(400).json({
      success: false,
      message: "Product name is required",
    });
  }

  const generatedDescription = `Discover our premium ${productName}, crafted with exceptional quality and modern design. Perfect for customers looking for style, durability, and outstanding performance.`;

  const newProduct = {
    id: products.length + 1,
    productName,
    category,
    tone,
    description: generatedDescription,
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: "Product generated successfully",
    data: newProduct,
  });
};


const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  const { productName, category, tone, description } = req.body;

  product.productName = productName || product.productName;
  product.category = category || product.category;
  product.tone = tone || product.tone;
  product.description = description || product.description;

  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    data: product,
  });
};

const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  const deletedProduct = products.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
    data: deletedProduct[0],
  });
};

const searchProducts = (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({
      success: false,
      message: "Search query is required",
    });
  }

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.tone.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json({
    success: true,
    count: filteredProducts.length,
    data: filteredProducts,
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};