const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  arrayProductsId: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId,rrequired: true },
      quantity: { type: Number, required: true, default: 1 },
    },
  ],
  coupon: { type: String, default: null },
  status: { type: String, default: "active" },
});

module.exports = { CartSchema };
