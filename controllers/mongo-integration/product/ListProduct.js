const mongoose = require("mongoose");
const { ProductSchema } = require("./ProductSchema");
const { BASE_URL } = require("../../../env/Constants");

const ListProduct = async (req, res) => {
  try {
    await mongoose.connect(BASE_URL);

    const categoryModel = mongoose.model("products", ProductSchema);

    const categories = await categoryModel.find();
    res.status(200).json({
      products: categories,
    });

  } catch (e) {
    res.status(500).json({
      "msg": `Error: ${e}`,
    });
  }
};

module.exports = {
  ListProduct,
};
