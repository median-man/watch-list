const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const readMovies = () =>
  fs
    .readFile(path.join(__dirname, "./movies.json"), "utf-8")
    .then((data) => JSON.parse(data));

const createMovie = (title, rating) => {
  if (!title || !rating) {
    return Promise.reject(new Error("Must have a title and rating"));
  }

  return readMovies().then((movies) => {
    const movie = {
      id: nanoid(),
      title,
      rating,
    };
    movies.push(movie);
    return fs
      .writeFile(
        path.join(__dirname, "./movies.json"),
        JSON.stringify(movies),
        "utf-8"
      )
      .then(() => movie);
  });
};

module.exports = { readMovies, createMovie };
