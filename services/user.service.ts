import { api } from "./auth.api";

export const getUsers = async () => {
  const response = await api.get("");
  console.log("response", response);
  return response.data;
};
