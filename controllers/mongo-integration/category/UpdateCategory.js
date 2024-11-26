const mongoose = require("mongoose");
const { CategorySchema } = require("./CategorySchema");
const { BASE_URL } = require("../../../env/Constants");

const UpdateCategory = async (req, res) => {
  const { _id, name, description } = req.body;

  if (!mongoose.isValidObjectId(_id)) {
    res.status(400).json({
      msg: "El id que ingresó es inválido.",
    });
  } else {
    try {
      await mongoose.connect(BASE_URL);

      const categoryModel = mongoose.model("categories", CategorySchema);

      const existCategory = await categoryModel.findById(_id);

      if (existCategory) {
        const updatedCategory = await categoryModel.findByIdAndUpdate(
          _id,
          { name, description },
          { new: true }
        );

        res.status(200).json({
          msg: "Categoría actualizada",
          category: updatedCategory,
        });
      } else {
        res.status(404).json({
          msg: "Id de categoría no encontrado.",
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
  UpdateCategory,
};
