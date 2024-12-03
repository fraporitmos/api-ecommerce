const express = require("express");
const { getUsers } = require("../controllers/mysql-integration/users/GetUsers");
const { postUser } = require("../controllers/mysql-integration/users/PosrUser");
const { postOrder } = require("../controllers/mysql-integration/users/PostOrder");
const { getOrders } = require("../controllers/mysql-integration/users/GetOrders");
const router = express.Router();

router.get("/users",getUsers )
router.post('/user', postUser)
router.post("/order", postOrder)
router.get("/orders", getOrders)

module.exports = router