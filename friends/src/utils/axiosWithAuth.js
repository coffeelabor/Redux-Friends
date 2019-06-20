import axios from "axios";
import { create } from "domain";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "http://localhost:5000/api"
  });
};
