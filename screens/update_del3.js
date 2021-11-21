import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../firebase/fire";
import { Button, Input, Image } from "react-native-elements";

class update_del1 extends Component {
  constructor() {
    super();

    this.state = {
      key: "",
      pic: "",
      eng: "",
      thai: "",
    };
  }

  componentDidMount() {
    console.log(this.props.navigation.getParam("key"));
    const VocabDoc = firebase
      .firestore()
      .collection("vocab3")
      .doc(this.props.navigation.getParam("key"))
    VocabDoc.get().then((res) => {
      if (res.exists) {
        const vocab = res.data();
        this.setState({
          key: res.id,
          pic: vocab.pic,
          eng: vocab.eng,
          thai: vocab.thai,
        });
      } else {
        console.log("Document does not exist!!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  updateVocab() {
    const updateVocabDoc = firebase
      .firestore()
      .collection("vocab3")
      .doc(this.state.key);
    updateVocabDoc
      .set({
        pic: this.state.pic,
        eng: this.state.eng,
        thai: this.state.thai,
      })
      .then(() => {
        Alert.alert(
          "Updating Alert",
          "Pls check your DB!!"
        );
        this.props.navigation.goBack()
      });
  }

  deleteVocab() {
    const delVocabDoc = firebase
      .firestore()
      .collection("vocab3")
      .doc(this.props.navigation.getParam("key"));
    delVocabDoc.delete().then((res) => {
      Alert.alert(
        "Deleting Alert",
        "Pls check your DB!!"
      );
      this.props.navigation.goBack()
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Image
          source={require("../assets/IT_Logo.png")}
          style={{ width: 120, height: 100 }}
          containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
        /> */}
        <Input
          placeholder={this.state.pic}
          value={this.state.pic}
          onChangeText={(val) => this.inputValueUpdate(val, "pic")}
        />
        <Input
          placeholder={this.state.eng}
          value={this.state.eng}
          onChangeText={(val) => this.inputValueUpdate(val, "eng")}
        />
        <Input
          placeholder={this.state.thai}
          value={this.state.thai}
          onChangeText={(val) => this.inputValueUpdate(val, "thai")}
        />
        <Button
          title="Update Vocab"
          onPress={() => {
            this.updateVocab();
          }}
        />
        <Button
          style={{marginTop:15}}
          title="Delete Vocab"
          onPress={() => {
            this.deleteVocab();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default update_del1;
