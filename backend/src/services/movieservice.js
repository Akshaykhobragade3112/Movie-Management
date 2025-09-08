const movieDAO = require("../dao/moviedb");

const getMovies = () => movieDAO.findAll();
const getMovieById = async (id) => {
  const movie = await movieDAO.findById(id);
  if (!movie) throw new Error("Movie not found");
  return movie;
};
const createMovie = (data) => movieDAO.create(data);
const updateMovie = async (id, data) => {
  const updated = await movieDAO.update(id, data);
  if (!updated) throw new Error("Movie not found");
  return updated;
};
const deleteMovie = async (id) => {
  const deleted = await movieDAO.remove(id);
  if (!deleted) throw new Error("Movie not found");
  return deleted;
};

module.exports = { getMovies, getMovieById, createMovie, updateMovie, deleteMovie };
