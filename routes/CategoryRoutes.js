const express = require("express");
const { ListCategory } = require("../controllers/mongo-integration/category/ListCategory");
const { CreateCategory } = require("../controllers/mongo-integration/category/CreateCategory");
const { UpdateCategory } = require("../controllers/mongo-integration/category/UpdateCategory");
const { DeleteCategory } = require("../controllers/mongo-integration/category/DeleteCategory");
const router = express.Router();

router.get("/category", ListCategory)
router.post("/category", CreateCategory)
router.put("/category", UpdateCategory)
router.delete("/category", DeleteCategory)


module.exports = router