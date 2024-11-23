const express = require("express");
const { helloActions } = require("../controllers/hello/HelloActions");
const router = express.Router();

router.get("/hello", helloActions)

module.exports = router