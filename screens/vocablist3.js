import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native'
import { ListItem, Badge } from 'react-native-elements'
import firebase from "../firebase/fire"


class vocablist extends Component {
    constructor() {
        super();

        this.firestoreRef = firebase.firestore().collection('vocab3');
        this.state = {
            vocabArr: []
        }
    }

    componentDidMount() {
        this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getCollection = (querySnapShot) => {
        const vocabArr = [];
        querySnapShot.forEach((res) => {
            const { pic, eng, thai } = res.data();
            vocabArr.push({
                key: res.id,
                // res,
                pic,
                eng,
                thai
            })
        })
        this.setState({
            vocabArr,
        })
    }

    render() {

        return(
            <ScrollView>
                {
                    this.state.vocabArr.map((item, i) => {
                        return (
                            <ListItem
                                key={i}
                                bottomDivider
                                onPress={()=>{
                                    this.props.navigation.navigate("Update_del3", {key:item.key})
                                  }}
                            >   
                                <Badge 
                                    value={i+1}
                                />
                                <ListItem.Content>
                                    <ListItem.Title>{item.eng}</ListItem.Title>
                                    <ListItem.Subtitle>{item.thai}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron/>
                            </ListItem>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default vocablist;