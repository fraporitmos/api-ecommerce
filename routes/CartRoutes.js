const express = require("express");
const { AddProductToCart } = require("../controllers/mongo-integration/cart/AddProductToCart");
const { GetProductsCart } = require("../controllers/mongo-integration/cart/GetProductsCart");
const router = express.Router();

router.post("/cart",AddProductToCart )
router.get("/cart/:_id",GetProductsCart )



module.exports = router