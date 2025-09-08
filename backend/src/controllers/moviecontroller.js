const movieService = require("../services/movieservice");

exports.getMovies = async (req, res) => {
  try {
    const movies = await movieService.getMovies();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await movieService.getMovieById(req.params.id);
    res.json(movie);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const movie = await movieService.createMovie(req.body);
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const movie = await movieService.updateMovie(req.params.id, req.body);
    res.json(movie);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await movieService.deleteMovie(req.params.id);
    res.json({ message: "Movie deleted" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
