import Product from '../models/Product.js';

export const createProduct = async (productData) => {
  return await Product.create(productData);
};

export const getAllProducts = async () => {
  return await Product.findAll();
};

export const getProductById = async (id) => {
  return await Product.findByPk(id);
};

export const updateProductById = async (id, productData) => {
  const product = await Product.findByPk(id);

  if (!product) {
    return null;
  }

  return await product.update(productData);
};

export const deleteProductById = async (id) => {
  const product = await Product.findByPk(id);

  if (!product) {
    return null;
  }

  return await product.destroy();
};
