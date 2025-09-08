const express = require("express");
const { body } = require("express-validator");
const controller = require("../controllers/moviecontroller");
const validateRequest = require("../middleware/validateRequest");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *         - director
 *         - releaseYear
 *         - genre
 *         - rating
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated ID of the movie
 *         title:
 *           type: string
 *           description: Movie title
 *         director:
 *           type: string
 *           description: Movie director
 *         releaseYear:
 *           type: integer
 *           description: Release year (must be >= 1888)
 *         genre:
 *           type: string
 *           description: Movie genre
 *         rating:
 *           type: number
 *           minimum: 0
 *           maximum: 10
 *           description: Rating between 0 and 10
 *       example:
 *         id: 64f8f5f4c5b6c5b5c12345
 *         title: Inception
 *         director: Christopher Nolan
 *         releaseYear: 2010
 *         genre: Sci-Fi
 *         rating: 9
 */

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Movie management API
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: List of all movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
router.get("/", controller.getMovies);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Movie ID
 *     responses:
 *       200:
 *         description: Movie found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: Movie not found
 */
router.get("/:id", controller.getMovieById);

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       201:
 *         description: Movie created
 *       400:
 *         description: Validation error
 */
router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("director").notEmpty().withMessage("Director is required"),
    body("releaseYear")
      .isInt({ min: 1888 })
      .withMessage("Valid release year required (>= 1888)"),
    body("genre").notEmpty().withMessage("Genre is required"),
    body("rating")
      .isFloat({ min: 0, max: 10 })
      .withMessage("Rating must be between 0 and 10"),
  ],
  validateRequest,
  controller.createMovie
);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Update a movie
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Movie ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: Movie updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Movie not found
 */
router.put(
  "/:id",
  [
    body("title").optional().notEmpty().withMessage("Title cannot be empty"),
    body("director")
      .optional()
      .notEmpty()
      .withMessage("Director cannot be empty"),
    body("releaseYear")
      .optional()
      .isInt({ min: 1888 })
      .withMessage("Valid release year required (>= 1888)"),
    body("genre").optional().notEmpty().withMessage("Genre cannot be empty"),
    body("rating")
      .optional()
      .isFloat({ min: 0, max: 10 })
      .withMessage("Rating must be between 0 and 10"),
  ],
  validateRequest,
  controller.updateMovie
);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Movie ID
 *     responses:
 *       200:
 *         description: Movie deleted
 *       404:
 *         description: Movie not found
 */
router.delete("/:id", controller.deleteMovie);

module.exports = router;
