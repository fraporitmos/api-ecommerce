const mongoose = require("mongoose");
const { CartSchema } = require("./CartSchema");
const { ProductSchema } = require("../product/ProductSchema");
const { BASE_URL } = require("../../../env/Constants");

const GetProductsCart = async (req, res) => {
  const { _id } = req.params;

  try {
    await mongoose.connect(BASE_URL);
    const cartModel = mongoose.model("cart", CartSchema);
    const productsModel = mongoose.model("products", ProductSchema);

    if (!_id) {
      return res.status(400).json({
        msg: "El id del carrito está vacío.",
      });
    }

    const cart = await cartModel.findById(_id);

    if (!cart) {
      return res.status(404).json({
        msg: "No se encontró el carrito.",
      });
    }

    // Obtener los IDs de los productos
    const productIds = cart.arrayProducts.map(item => item.productId);

    // Buscar en la colección de productos aquellos que coincidan con los IDs
    const products = await productsModel.find({ _id: { $in: productIds } });

    console.log(products)
    return res.status(200).json({
      msg: "Productos del carrito obtenidos con éxito.",
      cartId: cart._id,
      products: products.map(item=> ({
        ...item._doc,
        quantity: cart.arrayProducts.find(ci => ci.productId.toString() === item._id.toString()).quantity
      }))
    });

  } catch (e) {
    console.error(e);
    return res.status(500).json({
      msg: `Error: ${e.message}`,
    });
  }
};

module.exports = {
  GetProductsCart,
};
