import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar"; // Import the Appbar component
import About from "./pages/About"; // Adjust the import path to the About component
import Quiz from "./pages/Quiz"; // Adjust the import path to the Quiz component
import Competitions from "./pages/Competitions"; // Adjust the import path to the Competitions component
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar /> {/* Render the Appbar component */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/quizzes" element={<Quiz />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
