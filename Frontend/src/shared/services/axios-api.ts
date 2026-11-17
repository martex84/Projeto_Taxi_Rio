import axios from "axios";

export function requisicao() {
  return axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
