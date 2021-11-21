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

class stdvocabdetail extends Component {
    constructor() {
        super();
    
        this.state = {
          key: "",
          pic: "",
          eng: "",
          thai: "",
        };
      }
  render() {
    console.log(this.props.navigation.getParam("key"));
    console.log(this.props.navigation.getParam("eng"));
    console.log(this.props.navigation.getParam("thai"));
    console.log(this.props.navigation.getParam("pic"));
    return (
      <View>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: this.props.navigation.getParam("pic"),
          }}
        />
        
        <Text>Hello This Is Vocab Detail </Text>
        <Text>{this.props.navigation.getParam("eng")} </Text>
        <Text>{this.props.navigation.getParam("thai")} </Text>
      </View>
    );
  }
}

export default stdvocabdetail;
