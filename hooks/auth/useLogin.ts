import { useState } from "react";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log("login");
  };

  return { email, setEmail, password, setPassword, onLogin };
}
