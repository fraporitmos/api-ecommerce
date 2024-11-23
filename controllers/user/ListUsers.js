const mongoose = require("mongoose");
const { UserSchema } = require("./UserSchema");

 const ListUsers = async (req, res) => {
  try {
    await mongoose.connect(
      "mongodb+srv://ecommerce:idat2024@cluster-store.suyrv.mongodb.net/"
    );
    const userModel = mongoose.model("users", UserSchema);

    const users = await userModel.find()
    res.status(200).json({
       users: users
    });
    
  } catch (e) {
    res.status(500).json({
        "msg": `Error: ${e}`
    });
  }
};

module.exports = {
    ListUsers,
};

