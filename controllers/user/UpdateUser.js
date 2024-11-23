const mongoose = require("mongoose");
const { UserSchema } = require("./UserSchema");

const UpdateUser = async (req, res) => {
  const { _id, name, gender, email, membresi, phone } = req.body;
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

      const existUser = await userModel.findById(_id);

      if (existUser) {
        const updateUser = await userModel.findByIdAndUpdate(
          _id,
          { name, email, phone, gender, membresi },
          { new: true }
        );

        res.status(200).json({
          msg: "Usuario actualizado",
          user: updateUser,
        });
      } else {
        res.status(404).json({
          msg: "Id de usuario no encontrado.",
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
  UpdateUser,
};
