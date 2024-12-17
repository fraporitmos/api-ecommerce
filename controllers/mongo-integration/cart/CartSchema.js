const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  arrayProducts: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId,required: true },
      quantity: { type: Number, required: true, default: 1 },
    },
  ],
  coupon: { type: String, default: null },
  status: { type: String, default: "active" },
});

module.exports = { CartSchema };
