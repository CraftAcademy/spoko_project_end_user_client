import axios from "axios";

let apiUrl;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiUrl = "http://localhost:3000/api";

} else {
  apiUrl = "https://spoko-app-again.herokuapp.com/api/articles";
}

const SpokoAPI = axios.create({
  baseURL: apiUrl
});

export default SpokoAPI;