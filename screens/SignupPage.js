import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";

class SignupPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={{ fontSize: 30, color: "#fff" }}>SignUp Screen</Text>
        </View>

        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1a75ff"
          }}
        >
          <TextInput placeholder="Name" style={styles.input} />
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
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
              <Text style={{ fontSize: 25 }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SignupPage;

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
