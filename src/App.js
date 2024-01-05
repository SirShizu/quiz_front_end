import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar"; // Import the Appbar component
import About from "./pages/About"; // Adjust the import path to the About component

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar /> {/* Render the Appbar component */}
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
