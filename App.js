import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import {getDatabase} from 'firebase/database';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import Chatscreen from './components/chatscreen';

const firebaseConfig = {
  apiKey: "AIzaSyCwl0_JKwC10PlHiNAYqW41kgaKNTsMcFI",
  authDomain: "agvi-13f14.firebaseapp.com",
  projectId: "agvi-13f14",
  storageBucket: "agvi-13f14.appspot.com",
  messagingSenderId: "895908634945",
  appId: "1:895908634945:web:28b5f99acab899597881c0"
};

const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app);
const auth = initializeAuth(app);


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Chatscreen">
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Chatscreen" component={Chatscreen}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
