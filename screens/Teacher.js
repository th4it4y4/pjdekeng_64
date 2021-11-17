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

class Teacher extends Component {
  constructor() {
    super();

    this.dbRef1 = firebase.firestore().collection("vocab1");
    this.dbRef2 = firebase.firestore().collection("vocab2");
    this.dbRef3 = firebase.firestore().collection("vocab3");

    this.state = {
      pic: "",
      eng: "",
      thai: "",
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  storeVocab1() {
    if (this.state.pic == "") {
      alert("ใส่ URL รูปด้วย");
    } else {
      this.dbRef1
        .add({
          pic: this.state.pic,
          eng: this.state.eng,
          thai: this.state.thai,
        })
        .then((res) => {
          this.setState({
            pic: "",
            eng: "",
            thai: "",
          });
        })
        .catch((err) => {
          console.log("Error found: ", err);
        });
    }
  }

  storeVocab2() {
    if (this.state.pic == "") {
      alert("ใส่ URL รูปด้วย");
    } else {
      this.dbRef2
        .add({
          pic: this.state.pic,
          eng: this.state.eng,
          thai: this.state.thai,
        })
        .then((res) => {
          this.setState({
            pic: "",
            eng: "",
            thai: "",
          });
        })
        .catch((err) => {
          console.log("Error found: ", err);
        });
    }
  }

  storeVocab3() {
    if (this.state.pic == "") {
      alert("ใส่ URL รูปด้วย");
    } else {
      this.dbRef3
        .add({
          pic: this.state.pic,
          eng: this.state.eng,
          thai: this.state.thai,
        })
        .then((res) => {
          this.setState({
            pic: "",
            eng: "",
            thai: "",
          });
        })
        .catch((err) => {
          console.log("Error found: ", err);
        });
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ScrollView style={styles.container}>
          <Input
            placeholder={"URL pic"}
            value={this.state.pic}
            onChangeText={(val) => this.inputValueUpdate(val, "pic")}
          />
          <Input
            placeholder={"Eng"}
            value={this.state.eng}
            onChangeText={(val) => this.inputValueUpdate(val, "eng")}
          />
          <Input
            placeholder={"Thai"}
            value={this.state.thai}
            onChangeText={(val) => this.inputValueUpdate(val, "thai")}
          />
          <Button
            icon={<Icon name="check" size={15} color="white" />}
            title="  Add Vocab 1"
            buttonStyle={{
              backgroundColor: "green",
            }}
            onPress={() => this.storeVocab1()}
          />

          <Button
            icon={<Icon name="check" size={15} color="white" />}
            title="  Add Vocab 2"
            buttonStyle={{
              backgroundColor: "red",
            }}
            onPress={() => this.storeVocab2()}
          />

          <Button
            icon={<Icon name="check" size={15} color="white" />}
            title="  Add Vocab 3"
            buttonStyle={{
              backgroundColor: "blue",
            }}
            onPress={() => this.storeVocab3()}
          />

          <Button
            icon={<Icon name="check" size={15} color="white" />}
            title="  Go to Vocab List1"
            buttonStyle={{
              backgroundColor: "purple",
            }}
            onPress={() => this.props.navigation.navigate("Vocablists1")}
          />

          <Button
            icon={<Icon name="check" size={15} color="white" />}
            title="  Go to Vocab List2"
            buttonStyle={{
              backgroundColor: "purple",
            }}
            onPress={() => this.props.navigation.navigate("Vocablists2")}
          />

          <Button
            icon={<Icon name="check" size={15} color="white" />}
            title="  Go to Vocab List3"
            buttonStyle={{
              backgroundColor: "purple",
            }}
            onPress={() => this.props.navigation.navigate("Vocablists3")}
          />
        </ScrollView>
      </ThemeProvider>
    );
  }
}

const theme = {
  Button: {
    raised: true,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default Teacher;
