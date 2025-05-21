import { loginUser } from "@/services/auth.api";
import { useRouter } from "expo-router";
import { useState } from "react";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onLogin = () => {
    try {
      loginUser(email, password)
        .then((response) => {
          console.log("Login successful", response);
          router.replace("/");
        })
        .catch((error) => {
          console.error("Login failed", error);
        });
    } catch (error) {
      console.error("An error occurred during login", error);
    }
  };

  return { email, setEmail, password, setPassword, onLogin };
}
