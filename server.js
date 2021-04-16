// Dependencies
const express = require("express");
const path = require("path");
const createMovieApiRoutes = require("./routes/movieApiRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// form
// inputs for movie title and rating

// WHEN the user navigates to the home page
// THEN a form with a title input and submit button is displayed
// THEN a list of movies from the movieDB.json file on the server is displayed

// GIVEN the user has entered a title
// WHEN the user submits the form
// THEN a new movie is added to movieDb.json file on the server
// THEN the list of movies is updated on the page

// Routes
// GET / home page
// GET /api/movies json - array of movie objects
// POST /api/movies accepts json or form data with a title and rating for a movie, adds to movieDb.json file

app.use(
  express.static(path.join(__dirname, "./public"), { extensions: [".html"] })
);
createMovieApiRoutes(app);

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
