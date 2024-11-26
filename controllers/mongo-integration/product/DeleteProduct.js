/* 
Author: Fran Espino
Date: 25/11/24
*/

const mongoose = require("mongoose");
const {ProductSchema} = require('./ProductSchema')
const { BASE_URL } = require("../../../env/Constants");

const DeleteProduct = async (req, res) => {
  const { _id } = req.body;

  if (!mongoose.isValidObjectId(_id)) {
    res.status(400).json({
      msg: "El id que ingresó es inválido.",
    });
  } else {
    try {
      await mongoose.connect(BASE_URL);
      const productModel = mongoose.model("products", ProductSchema);

      const productDelete = await productModel.findByIdAndDelete(_id);

      if (productDelete) {
        res.status(200).json({
          msg: "Producto eliminado",
          product: productDelete,
        });
      } else {
        res.status(404).json({
          msg: "Producto no encontrado",
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
  DeleteProduct
}