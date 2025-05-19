import useSignUp from "@/hooks/auth/useSignUp";
import { formStyles } from "@/shared/styles/forms.styles";
import { Button, TextInput, View } from "react-native";

export default function SignUp() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    onSignUp,
  } = useSignUp();

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
