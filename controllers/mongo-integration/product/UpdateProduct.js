const mongoose = require("mongoose");
const {ProductSchema} = require('./ProductSchema')
const { BASE_URL } = require("../../../env/Constants");

const UpdateProduct = async (req, res) => {
  const { _id, name, description, price, stock, category, images } = req.body;

  if (!mongoose.isValidObjectId(_id)) {
    res.status(400).json({
      msg: "El id que ingresó es inválido.",
    });
  } else {
    try {
      await mongoose.connect(BASE_URL);
      const productModel = mongoose.model("products", ProductSchema);

      const existProduct = await productModel.findById(_id);

      if (existProduct) {
        const updatedProduct = await productModel.findByIdAndUpdate(
          _id,
          { name, description, price, stock, category, images },
          { new: true }
        );

        res.status(200).json({
          msg: "Producto actualizado",
          product: updatedProduct,
        });
      } else {
        res.status(404).json({
          msg: "Id de producto no encontrado.",
        });
      }
    } catch (e) {
      res.status(500).json({
        msg: `Error: ${e.message}`,
      });
    }
  }
};


module.exports = {
  UpdateProduct
}