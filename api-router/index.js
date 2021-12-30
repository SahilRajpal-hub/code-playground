const express = require("express");
const v1ApiRouter = require("./v1");

let router = express.Router();

router.use("/v1", v1ApiRouter);

module.exports = router;
