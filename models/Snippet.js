const mongoose = require("mongoose");

const snippetSchema = mongoose.Schema({
  files: [{}],
});

const Snippet = mongoose.model("Snippet", snippetSchema);
module.exports = Snippet;
