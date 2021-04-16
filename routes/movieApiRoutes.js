const db = require("../db");

const createMovieApiRoutes = (app) => {
  app.get("/api/movies", (req, res) =>
    db.readMovies().then((movies) => res.json(movies))
  );
};

module.exports = createMovieApiRoutes;
