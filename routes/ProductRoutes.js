const express = require("express");

const { CreateProduct } = require("../controllers/mongo-integration/product/CreateProduct");
const { UpdateProduct } = require("../controllers/mongo-integration/product/UpdateProduct");
const { DeleteProduct } = require("../controllers/mongo-integration/product/DeleteProduct");
const { ListProduct } = require("../controllers/mongo-integration/product/ListProduct");
const router = express.Router();

router.get("/product", ListProduct)
router.post("/product", CreateProduct)
router.put("/product", UpdateProduct)
router.delete("/product", DeleteProduct)

module.exports = router