const mongoose = require("mongoose");
const { CategorySchema } = require("./CategorySchema");
const { BASE_URL } = require("../../../env/Constants");

const DeleteCategory = async (req, res) => {
  const { _id } = req.body;

  if (!mongoose.isValidObjectId(_id)) {
    res.status(400).json({
      msg: "El id que ingresó es inválido.",
    });
  } else {
    try {
      await mongoose.connect(BASE_URL);

      const categoryModel = mongoose.model("categories", CategorySchema);

      const categoryDelete = await categoryModel.findByIdAndDelete(_id);
      
      if (categoryDelete) {
        res.status(200).json({
          msg: "Categoría eliminada",
          category: categoryDelete,
        });
      } else {
        res.status(404).json({
          msg: "Categoría no encontrada",
        });
      }
    } catch (e) {
      res.status(500).json({
        msg: `Error: ${e}`,
      });
    }
  }
};

module.exports = {
  DeleteCategory,
};
