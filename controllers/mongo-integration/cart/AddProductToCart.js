const mongoose = require("mongoose");
const { CartSchema } = require("./CartSchema");
const { BASE_URL } = require("../../../env/Constants");

const AddProductToCart = async (req, res) => {
  const { _id, arrayProductsId, coupon, status } = req.body;

  try {
    await mongoose.connect(BASE_URL);
    const cartModel = mongoose.model("cart", CartSchema);

    if (arrayProductsId.length === 0) {
      res.status(400).json({
        msg: "El los productos son vacios.",
      });
    }

    if (!_id) {
      
      const cart = new cartModel({
        arrayProductsId : [...arrayProductsId],
      })

      await cart.save()
      res.status(200).json({
        msg: "Carrito  create",
        cart,
      });

    }else{
      const cart = await cartModel.findById(_id);

      cart.arrayProductsId = [...cart.arrayProductsId, ...arrayProductsId];
      cart.coupon = coupon;
      cart.status = status;
      await cart.save();

      res.status(200).json({
        msg: "Carrito actualizado",
        cart,
      });
    }


  } catch (e) {
    res.status(500).json({
      msg: `Error: ${e}`,
    });
  }
};

module.exports = {
  AddProductToCart,
};
