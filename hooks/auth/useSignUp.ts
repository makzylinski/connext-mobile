import { signUp } from "@/services/auth.api";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function useSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const onSignUp = async () => {
    try {
      await signUp({
        username: email,
        email: email,
        password: password,
        role: "USER",
      });
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    onSignUp,
  };
}
