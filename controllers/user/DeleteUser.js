const mongoose = require("mongoose");
const { UserSchema } = require("./UserSchema");

const DeleteUser = async (req, res) => {
  const { _id } = req.body;
  if (!mongoose.isValidObjectId(_id)) {
    res.status(400).json({
      msg: "El id que ingresó es inválido.",
    });
  } else {
    try {
      await mongoose.connect(
        "mongodb+srv://ecommerce:idat2024@cluster-store.suyrv.mongodb.net/"
      );
      const userModel = mongoose.model("users", UserSchema);
      const userDelete = await userModel.findByIdAndDelete(_id);
      if (userDelete) {
        res.status(200).json({
          msg: "Usuario Eliminado",
          user: userDelete,
        });
      } else {
        res.status(404).json({
          msg: "Usuario no encontrado",
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
  DeleteUser,
};
