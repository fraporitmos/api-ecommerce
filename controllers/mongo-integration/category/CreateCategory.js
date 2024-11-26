const mongoose = require("mongoose");
const { CategorySchema } = require("./CategorySchema");
const { BASE_URL } = require("../../../env/Constants");

 const CreateCategory = async (req, res) => {

  try {
    await mongoose.connect(
      BASE_URL
    );
    const categoriesModel = mongoose.model("categories", CategorySchema);
    const categories = new categoriesModel(req.body)

    await categories.save()

    res.status(200).json({
        "msg": `Categoria ${req.body.name} creado.`
    });
    
  } catch (e) {
    res.status(500).json({
        "msg": `Error: ${e}`
    });
  }
};

module.exports = {
    CreateCategory
};
