import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Resume from "./pages/Resume";
import ProjectArchive from "./pages/ProjectArchive";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, []);
  return (
    <>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
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
