import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import firebase from "../firebase/fire";
import { ThemeProvider, Button, Input, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class Student extends Component {
  render() {
    return (
      <View>
        <Button
          icon={<Icon name="check" size={15} color="white" />}
          title="  หมวด1"
          buttonStyle={{
            backgroundColor: "green",
          }}
          onPress={() => this.props.navigation.navigate("Stdvocabs1")}
        />
        <Button
          icon={<Icon name="check" size={15} color="white" />}
          title="  หมวด2"
          buttonStyle={{
            backgroundColor: "green",
          }}
          onPress={() => this.props.navigation.navigate("Stdvocabs2")}
        />
        <Button
          icon={<Icon name="check" size={15} color="white" />}
          title="  หมวด3"
          buttonStyle={{
            backgroundColor: "green",
          }}
          onPress={() => this.props.navigation.navigate("Stdvocabs3")}
        />
      </View>
    );
  }
}

export default Student;