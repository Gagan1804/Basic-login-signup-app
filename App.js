import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";

import SignupPage from "./screens/SignupPage";
import LoginPage from "./screens/LoginPage";

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={{ fontSize: 30, color: "#fff", textAlign: "center" }}>
            Welcome to PLMP Blockchain Services !
          </Text>
        </View>

        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#333333"
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              color: "#fff",
              margin: 10,
              paddingLeft: 20,
              paddingBottom: 10,
              paddingRight: 20,
              paddingTop: 10,
              borderRadius: 40
            }}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              color: "#fff",
              margin: 10,
              paddingLeft: 20,
              paddingBottom: 10,
              paddingRight: 20,
              paddingTop: 10,
              borderRadius: 40
            }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { header: null }
    },
    Signup: {
      screen: SignupPage
    },
    Login: {
      screen: LoginPage
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  buttonText: {
    fontSize: 25,
    color: "#fff"
  }
});
