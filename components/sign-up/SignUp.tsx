import { signUp } from "@/services/auth.api";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { styles } from "../login/LoginStyles.styles";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSignUp = () => {
    signUp({
      username: email,
      email: email,
      password: password,
      role: "USER",
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Repeat Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Button title="Sign Up!" onPress={onSignUp} />
    </View>
  );
}
