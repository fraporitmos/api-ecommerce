const mongoose = require("mongoose");
const { CartSchema } = require("./CartSchema");
const { BASE_URL } = require("../../../env/Constants");

const AddProductToCart = async (req, res) => {
  const { _id, arrayProductsId, coupon, status } = req.body;

  try {
    await mongoose.connect(BASE_URL);
    const cartModel = mongoose.model("cart", CartSchema);

    if (!arrayProductsId || arrayProductsId.length === 0) {
      return res.status(400).json({
        msg: "Los productos son vacíos.",
      });
    }

    if (!_id) {
      const formattedProducts = arrayProductsId.map(({ productId, quantity }) => ({
        productId,
        quantity: quantity || 1,
      }));

      const cart = new cartModel({
        arrayProductsId: formattedProducts,
        coupon: coupon,
      });

      await cart.save();
      return res.status(200).json({
        msg: "Carrito creado",
        cart,
      });
    } else {
      const cart = await cartModel.findById(_id);
      if (!cart) {
        return res.status(404).json({
          msg: "Carrito no encontrado",
        });
      }

      arrayProductsId.forEach(({ productId, quantity }) => {
        const existingProduct = cart.arrayProductsId.find(
          (item) => item.productId.toString() === productId
        );

        if (existingProduct) {
          // Si el producto ya existe, incrementa la cantidad
          existingProduct.quantity += quantity || 1;
        } else {
          // Si el producto no existe, agregarlo
          cart.arrayProductsId.push({ productId, quantity: quantity || 1 });
        }
      });

      cart.coupon = coupon || cart.coupon;
      cart.status = status || cart.status;

      await cart.save();

      return res.status(200).json({
        msg: "Carrito actualizado",
        cart,
      });
    }
  } catch (e) {
    res.status(500).json({
      msg: `Error: ${e.message}`,
    });
  }
};

module.exports = {
  AddProductToCart,
};
