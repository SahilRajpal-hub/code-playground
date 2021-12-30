const express = require("express");

const snippetRouter = require("../routes/snippet-router");
const executeRouter = require("../routes/execute-router");

let router = express.Router();

router.use("/snippet", snippetRouter);
router.use("/execute", executeRouter);

module.exports = router;
