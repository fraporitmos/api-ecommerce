const mongoose = require("mongoose");
const {ProductSchema} = require('./ProductSchema')
const { BASE_URL } = require("../../../env/Constants");

 const CreateProduct = async (req, res) => {
  try {
    await mongoose.connect(BASE_URL);
    const productModel = mongoose.model("products", ProductSchema);

    const newProduct = new productModel(req.body);
    await newProduct.save();

    res.status(200).json({
      msg: `Producto ${req.body.name} creado exitosamente.`,
      product: newProduct,
    });
  } catch (e) {
    res.status(500).json({
      msg: `Error al crear producto: ${e.message}`,
    });
  }
};

module.exports = {
  CreateProduct
};