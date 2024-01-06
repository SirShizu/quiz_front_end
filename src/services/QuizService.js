import axios from "axios";

const QUIZ_TOPICS_REST_API_URL = "http://localhost:8080/quizzes";
const COMPETITION_REST_API_URL = "http://localhost:8080/competitions";
const LEADERBOARD_REST_API_URL = "http://localhost:8080/leaderboard";

class QuizService {
  getAllTopics() {
    return axios.get(QUIZ_TOPICS_REST_API_URL);
  }

  getAllCompetitions() {
    return axios.get(COMPETITION_REST_API_URL);
  }

  getLeaderboard() {
    return axios.get(LEADERBOARD_REST_API_URL);
  }
}

export default new QuizService();
