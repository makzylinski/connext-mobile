import { environment } from "@/environments/environment";
import axios from "axios";

const API_BASE_URL = environment.baseUrl;

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const fetchUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const signUp = async (user: any) => {
  const response = await api.post("/register", user);
  return response.data;
};

export const loginUser = async (username: string, password: string) => {
  const response = await api.post("/login", {
    username,
    password,
  });
  return response.data;
};
