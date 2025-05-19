import { formStyles } from "@/shared/styles/forms.styles";
import { useState } from "react";
import { Button, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log("login");
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

      <Button title="Log In" onPress={onLogin} />
    </View>
  );
}
