const Snippet = require("../models/Snippet");

const getSnippetController = async () => {
  try {
    const snippet = await Snippet.find();
    return snippet[0].files;
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
};

const saveSnippetController = async (body) => {
  await Snippet.deleteMany(); // delete the previous snippet and save the new one i.e. just replacement for now
  const snippet = new Snippet({ files: body });
  snippet.save();
};

module.exports = { getSnippetController, saveSnippetController };
