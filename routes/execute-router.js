const express = require("express");
const {
  cPlusPlusExecute,
  javaExecute,
  pythonExecute,
} = require("../controllers/excecuteController");
const router = express.Router();

router.post("/cpp", async (req, res) => {
  try {
    const { code, input } = req.body;
    console.log("code :", req.body);
    cPlusPlusExecute(code, input)
      .then((data) => {
        console.log("SUCCESSFULL PROMISE " + data);
        console.log("SENDING " + data);
        console.log(data.output);
        res.status(200).json({ output: data.output });
      })
      .catch((err) => {
        res.status(500).json({ msg: "Internal server error" });
        console.log("ERROR PROMISE " + err);
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.post("/java", async (req, res) => {
  try {
    const { code, input } = req.body;
    console.log("code :", req.body);
    javaExecute(code, input)
      .then((data) => {
        console.log("SUCCESSFULL PROMISE " + data);
        console.log("SENDING " + data);
        console.log(data.output);
        res.status(200).json({ output: data.output });
      })
      .catch((err) => {
        res.status(500).json({ msg: "Internal server error" });
        console.log("ERROR PROMISE " + err);
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.post("/py", async (req, res) => {
  try {
    const { code, input } = req.body;
    console.log("code :", req.body);
    pythonExecute(code, input)
      .then((data) => {
        console.log("SUCCESSFULL PROMISE " + data);
        console.log("SENDING " + data);
        console.log(data.output);
        res.status(200).json({ output: data.output });
      })
      .catch((err) => {
        res.status(500).json({ msg: "Internal server error" });
        console.log("ERROR PROMISE " + err);
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
