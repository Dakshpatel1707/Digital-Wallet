import axios from "axios";

const api = axios.create({
  baseURL: "https://digital-wallet-dr4k.onrender.com/api",
});

export default api;