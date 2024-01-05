import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch quizzes from the backend API
    async function fetchQuizzes() {
      try {
        const response = await axios.get("http://localhost:8080/quizzes"); // Update the URL to your backend endpoint
        setQuizzes(response.data); // Set fetched quizzes to state
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    }

    fetchQuizzes();
  }, []); // Empty dependency array ensures this effect runs once on component mount

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentQuizzes = quizzes.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className="content"
      style={{ position: "relative", height: "1686.6px", opacity: 1 }}
    >
      <div
        className="card-problem"
        style={{ position: "absolute", left: "0px", top: "0px", opacity: 1 }}
      >
        <h2 className="pure-u-1-5">All Quiz</h2>
        <table style={{ margin: "20px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Topic</th>
              {/* Add more table headers for additional details if needed */}
            </tr>
          </thead>
          <tbody>
            {currentQuizzes.map((quiz) => (
              <tr key={quiz.id}>
                <td style={{ padding: "10px" }}>
                  <a
                    href={`/quiz/${quiz.name}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                    }}
                  >
                    {quiz.id}
                  </a>
                </td>
                <td style={{ padding: "10px" }}>
                  <a
                    href={`/quiz/${quiz.name}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                    }}
                  >
                    {quiz.name}
                  </a>
                </td>
                <td style={{ padding: "10px" }}>
                  <a
                    href={`/quiz/${quiz.name}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                    }}
                  >
                    {quiz.topic}
                  </a>
                </td>
                {/* Add more table data for additional details if needed */}
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          {Array.from({ length: Math.ceil(quizzes.length / itemsPerPage) }).map(
            (_, index) => (
              <button key={index + 1} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
