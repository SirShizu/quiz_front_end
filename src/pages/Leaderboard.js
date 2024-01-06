import React, { useState, useEffect } from "react";
import QuizService from "../services/QuizService.js"; // Assuming the path to your service file

const Leaderboard = () => {
  const [leaderboardData, setLeaderboard] = useState([]);

  useEffect(() => {
    // Fetch competitions when the component mounts
    QuizService.getLeaderboard()
      .then((response) => {
        setLeaderboard(response.data); // Update state with fetched competition data
      })
      .catch((error) => {
        console.error("Error fetching competitions:", error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.username}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
