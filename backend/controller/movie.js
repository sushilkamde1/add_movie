import movieData from "../models/movie.js";

export const getMovie = async (req, res) => {
  try {
    const allMovies = await movieData.find();
    res.status(200).json(allMovies);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMovie = async (req, res) => {
  const movie = req.body;
  const newMovie = new movieData(movie);

  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  const id = req.params.id;
  try {
    await movieData.findOneAndRemove(id).exec();
    res.send("successfully deleted!");
  } catch (error) {
    console.log(error);
  }
};
