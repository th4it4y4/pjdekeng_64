import React, { Component } from "react";
import { ScrollView, Image } from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "../firebase/fire";
class stdvocab1 extends Component {
  constructor() {
    super();

    this.subjCollection = firebase.firestore().collection("vocab3");

    this.state = {
      subject_list: [],
    };
  }

  getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
      //   console.log("res: ", res);
      //   console.log("res.data() : ", res.data());

      const { pic, eng, thai } = res.data();
      all_data.push({
        key: res.id,
        pic,
        eng,
        thai,
      });
    });
    // console.log("all_data : ", all_data);
    this.setState({
      subject_list: all_data,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.subjCollection.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <ScrollView>
        {this.state.subject_list.map((item, i) => {
          return (
            <ListItem
              key={i}
              bottomDivider
              onPress={()=>{
                this.props.navigation.navigate("Stddetail",{key:item.key, eng:item.eng, pic: item.pic, thai: item.thai})
              }}
            >
              <ListItem.Content>
                <ListItem.Title>{item.pic}</ListItem.Title>
                <ListItem.Subtitle>{item.eng}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.thai}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          );
        })}
      </ScrollView>
    );
  }
}

export default stdvocab1;
