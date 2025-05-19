import { signUp } from "@/services/auth.api";
import { formStyles } from "@/shared/styles/forms.styles";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function SignUp() {
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

  return (
    <View style={formStyles.container}>
      <TextInput
        style={formStyles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={formStyles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={formStyles.input}
        placeholder="Repeat Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Button title="Sign Up!" onPress={onSignUp} />
    </View>
  );
}
