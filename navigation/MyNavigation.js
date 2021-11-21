import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
//ส่วนครู
import Teacher from "../screens/Teacher";
import vocablist1 from "../screens/vocablist1";
import vocablist2 from "../screens/vocablist2";
import vocablist3 from "../screens/vocablist3";
//ส่วนนักเรียน
import Student from "../screens/Student";
import stdvocab1 from "../screens/stdvocab1";
import stdvocab2 from "../screens/stdvocab2";
import stdvocab3 from "../screens/stdvocab3";

import stdvocabdetail from "../screens/stdvocabdetail";
import update_del1 from "../screens/update_del1";

// Signup : SignupScreen,
//   Signin: SigninScreen,
//   Home: HomeScreen,
//   Teacher: Teacher,
//   Vocablists1: vocablist1,
//   Vocablists2: vocablist2,
//   Vocablists3: vocablist3,
//   Students: Student,
//   Stdvocabs1: stdvocab1,
//   Stdvocabs2: stdvocab2,
//   Stdvocabs3: stdvocab3,
//   Stddetail: stdvocabdetail,
//   Update_del1: update_del1,
const stack = createNativeStackNavigator();

export default function MyNavigator() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            title: "Signup",
          }}
        />
        <stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{
            title: "Signin",
          }}
        />
        <stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
          }}
        />
        <stack.Screen
          name="Teacher"
          component={Teacher}
          options={{
            title: "Teacher",
          }}
        />
        <stack.Screen
          name="Vocablists1"
          component={vocablist1}
          options={{
            title: "Vocablists1 หมวด 1",
          }}
        />
        <stack.Screen
          name="Vocablists2"
          component={vocablist2}
          options={{
            title: "Vocablists2 หมวด 2",
          }}
        />
        <stack.Screen
          name="Vocablists3"
          component={vocablist3}
          options={{
            title: "Vocablists3 หมวด 3",
          }}
        />
        <stack.Screen
          name="Students"
          component={Student}
          options={{
            title: "Student",
          }}
        />
        <stack.Screen
          name="Stdvocabs1"
          component={stdvocab1}
          options={{
            title: "หน้าคำศัพท์ 1",
          }}
        />
        <stack.Screen
          name="Stdvocabs2"
          component={stdvocab2}
          options={{
            title: "หน้าคำศัพท์ 2",
          }}
        />
        <stack.Screen
          name="Stdvocabs3"
          component={stdvocab3}
          options={{
            title: "หน้าคำศัพท์ 3",
          }}
        />
        <stack.Screen
          name="Stddetail"
          component={stdvocabdetail}
          options={{
            title: "",
          }}
        />
        <stack.Screen
          name="Update_del1"
          component={update_del1}
          options={{
            title: "หน้าคำศัพท์ 3",
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
