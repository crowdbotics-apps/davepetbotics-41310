import React from "react";
import { View, TextInput, StyleSheet, Button, Image, Text } from "react-native";

const LoginScreen = ({
  navigation
}) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    // Perform login logic here
    navigation.navigate("Pet Gallery");
  };

  return <View style={styles.container}>
      <Image style={styles.logo} source={require("./PetboticsLogo.png")} resizeMode="center" />
      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} value={username} />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Login" onPress={handleLogin} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFEDF4",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 266,
    height: 396,
    marginBottom: 20
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: 5
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  }
});
export default LoginScreen;