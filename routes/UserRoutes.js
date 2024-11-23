const express = require("express");
const { ListUsers } = require("../controllers/user/ListUsers");
const { CreateUser } = require("../controllers/user/CreateUser");
const { UpdateUser } = require("../controllers/user/UpdateUser");
const { DeleteUser } = require("../controllers/user/DeleteUser");
const router = express.Router();

router.get("/user", ListUsers)
router.post("/user", CreateUser)
router.put("/user", UpdateUser)
router.delete("/user", DeleteUser)

module.exports = router