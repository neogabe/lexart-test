import * as productService from '../services/productService.js';

export const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found.' });
    }

    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const updateProductById = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProductById(
      req.params.id,
      req.body
    );
    if (!updatedProduct) {
      return res.status(404).send({ message: 'Product not found.' });
    }

    return res.status(200).send(updatedProduct);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const product = await productService.deleteProductById(req.params.id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
