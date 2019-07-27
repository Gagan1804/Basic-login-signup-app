import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class LoginPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={{ fontSize: 30, color: "#fff" }}>Login Screen</Text>
        </View>

        <View style={styles.container}>
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              margin: 10,
              paddingLeft: 20,
              paddingBottom: 10,
              paddingRight: 20,
              paddingTop: 10,
              borderRadius: 40
            }}
          >
            <Text style={{ fontSize: 25 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a75ff"
  },
  input: {
    fontSize: 20,
    width: wp("80%"),
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 30
  }
});
