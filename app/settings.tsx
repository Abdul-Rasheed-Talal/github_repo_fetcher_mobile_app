import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useState } from "react";

const settings = () => {
  const [username, setUserName] = useState("");
  const [randomRepoName, setRandomRepoName] = useState("");
  const fetchRepo =() => {
    console.log(username);
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => setRandomRepoName(data[Math.floor(Math.random()* data.length)].name))
    .catch(error => console.error(error));
  }
  return (
    <View style={styles.container}>
      <Text>settings</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUserName}
        placeholder="Enter your Github Username"
      />
      <Button title="Fetch Repos" onPress={fetchRepo}>
      </Button>
      <Text
      style={
        styles.repoName
      }> Random Repo: {randomRepoName}</Text>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
  repoName:{
    fontSize:20,
    color:"black",
    marginTop:10,
  }
});
