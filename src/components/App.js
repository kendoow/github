import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./app.scss";
import Card from "./card/Card";
import Error from "./main/Error";
import Main from "./main/Main";
const App = () => {
  return (
    <Routes className="container">
      <Route path="/" element={<Main/>}></Route>
      <Route path="/card/:username/:reponame" element = {<Card/>}></Route>
      <Route path = "/error" element = {<Error/>}></Route>
      <Route
        path="*"
        element={<Navigate to="/" />}
    />
    </Routes>
  );
};

export default App;
