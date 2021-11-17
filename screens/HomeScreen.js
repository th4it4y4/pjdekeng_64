import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnteacher} onPress={() => navigation.navigate('Teacher')}>
            <Text>Teacher</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.btnstudent} onPress={() => navigation.navigate('Students')}>
            <Text>Student</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btnteacher: {
    backgroundColor: "#ff6666",
    padding: 10,
    margin: 10,
    height: 40,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "row"
  },
  btnstudent:{
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    height: 40,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default HomeScreen;
