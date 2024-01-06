import React, { useState, useEffect } from "react";
import QuizService from "../services/QuizService.js"; // Assuming the path to your service file

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    // Fetch competitions when the component mounts
    QuizService.getAllCompetitions()
      .then((response) => {
        setCompetitions(response.data); // Update state with fetched competition data
      })
      .catch((error) => {
        console.error("Error fetching competitions:", error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      <h1>Competitions</h1>
      <div className="card-container">
        {competitions.map((competition, index) => (
          <div className="card" key={index}>
            <h2>{competition.name}</h2>
            <p>Participants: {competition.participants}</p>
            <p>Submissions: {competition.submissions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competitions;
