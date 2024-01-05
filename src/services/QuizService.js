import axios from "axios";

const QUIZ_TOPICS_REST_API_URL = "http://localhost:8080/quizzes";

class QuizService {
  getAllTopics() {
    return axios.get(QUIZ_TOPICS_REST_API_URL);
  }
}

export default new QuizService();
