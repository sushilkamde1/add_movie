import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CreateMovie from "./components/createMovie/CreateMovie";
import ShowMovie from "./components/showMovie/ShowMovie";

const App = () => {
  return (
    <div>
      <CreateMovie />
      <ShowMovie />
    </div>
  );
};

export default App;
