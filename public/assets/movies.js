const fetchAllMovies = () =>
  fetch("/api/movies").then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("The request for movies failed.");
  });
// const fetchAllMovies = () =>
//   Promise.resolve([
//     {
//       id: "123abc",
//       title: "Ben Hur",
//       rating: 5,
//     },
//     {
//       id: "123zzz",
//       title: "Back to the Future",
//       rating: 5,
//     },
//   ]);

const renderMovieList = () => {
  fetchAllMovies()
    .then((movies) => {
      // get ref to the ul #movie-list
      const movieListEL = document.getElementById("movie-list");
      movieListEL.innerHTML = "";
      movies.forEach(({ title, rating }) => {
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
        li.textContent = `${title} | ${rating}`;
        movieListEL.append(li);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

renderMovieList();
