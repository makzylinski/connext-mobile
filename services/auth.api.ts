import { environment } from "@/environments/environment";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  await AsyncStorage.setItem("authToken", response.data.token);
  await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
  return response.data;
};

export const loginUser = async (username: string, password: string) => {
  const response = await api.post("/login", {
    username,
    password,
  });
  await AsyncStorage.setItem("authToken", response.data.token);
  await AsyncStorage.setItem("user", JSON.stringify(response.data.user));

  return response.data;
};
