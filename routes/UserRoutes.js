const express = require("express");
const { getUsers } = require("../controllers/mysql-integration/users/GetUsers");
const router = express.Router();

router.get("/users",getUsers )



module.exports = router