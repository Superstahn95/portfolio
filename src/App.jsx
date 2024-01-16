import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";
import ProjectArchive from "./pages/ProjectArchive";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/archive" element={<ProjectArchive />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
