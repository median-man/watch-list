const fs = require("fs").promises;
const path = require("path");

// create a function readMovies  which async reads movieDb.json resolves that as a promise
const readMovies = () =>
  fs
    .readFile(path.join(__dirname, "./movies.json"), "utf-8")
    .then((data) => JSON.parse(data));

module.exports = { readMovies };
