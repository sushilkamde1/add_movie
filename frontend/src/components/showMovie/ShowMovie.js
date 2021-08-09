import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowMovie = () => {
  const [moviesList, setMoviesList] = useState([]);

  // Delete movie
  const deleteMovie = (id) => {
    axios.delete(`http://localhost:4000/api/${id}`).then(() => {
      window.location.reload(false);
    });
  };
  useEffect(() => {
    axios.get("http://localhost:4000/api").then((allMovie) => {
      setMoviesList(allMovie.data);
    });
  }, []);
  return (
    <>
      <div className="container my-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Movie Name</th>
              <th scope="col">Director Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {moviesList.map((movie, key) => {
              return (
                <tr key={key}>
                  <th scope="row">{key}</th>
                  <td>{movie.movieName}</td>
                  <td>{movie.directorName}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteMovie(movie._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowMovie;
