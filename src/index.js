import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<ShowList />} />
      <Route path="/show/:showId" element={<ShowSummary />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
