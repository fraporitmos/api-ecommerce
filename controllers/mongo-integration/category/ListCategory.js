const mongoose = require("mongoose");
const { CategorySchema } = require("./CategorySchema");
const { BASE_URL } = require("../../../env/Constants");

const ListCategory = async (req, res) => {
  try {
    await mongoose.connect(BASE_URL);

    const categoryModel = mongoose.model("categories", CategorySchema);

    const categories = await categoryModel.find();
    res.status(200).json({
      categories: categories,
    });

  } catch (e) {
    res.status(500).json({
      "msg": `Error: ${e}`,
    });
  }
};

module.exports = {
  ListCategory,
};
