import express from "express";
import { getMovie, createMovie, deleteMovie } from "../controller/movie.js";
const router = express.Router();

router.get("/", getMovie);
router.post("/", createMovie);
router.delete("/:id", deleteMovie);

export default router;
