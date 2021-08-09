import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  movieName: String,
  directorName: String,
});

const movie = mongoose.model("movie", movieSchema);

export default movie;
