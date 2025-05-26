import { api } from "./auth.api";

const USERS_ENDPOINT = "/api/users";

export const getUsers = async () => {
  const response = await api.get(USERS_ENDPOINT);
  console.log("response", response);
  return response.data;
};
