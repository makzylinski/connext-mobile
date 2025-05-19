import { environment } from "@/environments/environment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const excludedUrls = ["/login", "/register"];

const api = axios.create({
  baseURL: environment.baseUrl,
});

api.interceptors.request.use(
  async (config) => {
    const isExcluded = config.url
      ? excludedUrls.some((url) => config.url!.includes(url))
      : false;
    if (isExcluded) {
      return config;
    }

    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
