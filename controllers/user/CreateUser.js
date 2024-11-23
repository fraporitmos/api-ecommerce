const mongoose = require("mongoose");
const { UserSchema } = require("./UserSchema");

 const CreateUser = async (req, res) => {

  try {
    await mongoose.connect(
      "mongodb+srv://ecommerce:idat2024@cluster-store.suyrv.mongodb.net/"
    );
    const userModel = mongoose.model("users", UserSchema);
    const user = new userModel(req.body)
    await user.save()

    res.status(200).json({
        "msg": `Usuario ${req.body.name} creado.`
    });
    
  } catch (e) {
    res.status(500).json({
        "msg": `Error: ${e}`
    });
  }
};

module.exports = {
    CreateUser
};

