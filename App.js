import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
//ส่วนครู
import Teacher from './screens/Teacher';
import vocablist1 from './screens/vocablist1';
import vocablist2 from './screens/vocablist2';
import vocablist3 from './screens/vocablist3';
//ส่วนนักเรียน
import Student from './screens/Student';
import stdvocab1 from './screens/stdvocab1';
import stdvocab2 from './screens/stdvocab2';
import stdvocab3 from './screens/stdvocab3';

import stdvocabdetail from './screens/stdvocabdetail';
import update_del1 from './screens/update_del1';
import update_del2 from './screens/update_del2';
import update_del3 from './screens/update_del3';

// import MyNavigator from './navigation/MyNavigation';

//import MyNavigator from './navigation/MyNavigator';

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";

// const Tab = createBottomTabNavigator({
//   Vocablist1: vocablist1,
//   Vocablist2: vocablist2,
//   Vocablist3: vocablist3
// });

const stackNavigator = createStackNavigator({
  Signup : SignupScreen,
  Signin: SigninScreen,
  Home: HomeScreen,
  Teacher: Teacher,
  Vocablists1: vocablist1,
  Vocablists2: vocablist2,
  Vocablists3: vocablist3,
  Students: Student,
  Stdvocabs1: stdvocab1,
  Stdvocabs2: stdvocab2,
  Stdvocabs3: stdvocab3,
  Stddetail: stdvocabdetail,
  Update_del1: update_del1,
  Update_del2: update_del2,
  Update_del3: update_del3,
});

const App = createAppContainer(stackNavigator);

export default App;

// export default function App() {
//   // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
//   return (
//     <MyNavigator/>
//   )

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "blue",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });