const express = require("express");
const {
  getSnippetController,
  saveSnippetController,
} = require("../controllers/snippetController");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const snippet = await getSnippetController();
    res.status(200).json(snippet);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    await saveSnippetController(req.body);
    res.status(200).json({ msg: "Snippet saved successfully" });
  } catch (error) {
    console.log(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
