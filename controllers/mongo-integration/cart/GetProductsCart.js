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

    if(!_id){
        res.status(400).json({
            msg: "El id del carrito esta vacio.",
        });
    }

    const cart = await cartModel.findById(_id)
    
    if(cart){
        //$in indica el operador de mongo db para selecionar todas colecciones donde sus valores hagan match con el array de  cart.arrayProductsId

        const products = await productsModel.find({
            //Este _id  pertenece a la coleccion de products
            _id: {$in: cart.arrayProductsId}
        })

        res.status(200).json({
            products
        });
    }

  } catch (e) {
    res.status(500).json({
      msg: `Error: ${e}`,
    });
  }
};

module.exports = {
    GetProductsCart,
};
