import React from "react";
import { SafeAreaView ,Text,StatusBar} from "react-native";
import HomeScreen from "./screens/HomeScreen";


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={'dark-content'}/>
        <HomeScreen/>
        </SafeAreaView>
  );
}