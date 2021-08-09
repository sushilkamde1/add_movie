import React, { useState } from "react";
import axios from "axios";

const CreateMovie = () => {
  const [movie, setMovie] = useState({
    movieName: "",
    directorName: "",
  });

  const addMovie = () => {
    axios.post("http://localhost:4000/api", movie).then(() => {
      window.location.reload(false);
    });

    setMovie({
      movieName: "",
      directorName: "",
    });
  };

  return (
    <>
      <h2 className="text-center">Add Movie</h2>
      <div className="container">
        <form>
          <div className="mb-4">
            <label className="form-label">Movie Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="Movie"
              value={movie.movieName}
              onChange={(event) => {
                setMovie({ ...movie, movieName: event.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Director Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={movie.directorName}
              onChange={(event) => {
                setMovie({ ...movie, directorName: event.target.value });
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={addMovie}>
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateMovie;
