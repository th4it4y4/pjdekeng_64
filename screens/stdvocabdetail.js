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

class stdvocabdetail extends Component{
    render(){
        return(
            <View>
                <Text>Hello This Is Vocab Detail</Text>
            </View>
        );
    }
}

export default stdvocabdetail;