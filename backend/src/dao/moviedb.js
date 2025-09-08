const Movie = require("../models/movie");

const findAll = () => Movie.find();
const findById = (id) => Movie.findById(id);
const create = (data) => Movie.create(data);
const update = (id, data) => Movie.findByIdAndUpdate(id, data, { new: true });
const remove = (id) => Movie.findByIdAndDelete(id);

module.exports = { findAll, findById, create, update, remove };
