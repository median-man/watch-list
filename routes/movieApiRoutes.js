const db = require("../db");

const createMovieApiRoutes = (app) => {
  app.get("/api/movies", (req, res) =>
    db.readMovies().then((movies) => res.json(movies))
  );

  app.post("/api/movies", (req, res) => {
    const { title, rating } = req.body;
    db.createMovie(title, rating)
      .then((movie) => res.json(movie))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  });
};

module.exports = createMovieApiRoutes;
