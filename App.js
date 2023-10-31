import React from "react";
import { StatusBar, View, Text, Touchable } from "react-native";
import {
  PressableScreen,
  StackHookScreen,
  StackScreen,
  TouchableScreen,
  StackParamScreen,
} from "./screens";

const App = () => {
  return (
    <View style={{ paddingTop: 0, flex: 1 }}>
      <StatusBar style={{ padding: 0 }} />
      <Text style={{ textAlign: "left", fontSize: 24 }}>
        Nama: Ahmad Mu'min Faisal
      </Text>
      <Text style={{ textAlign: "left", fontSize: 24 }}>
        NIM: 1203210101
      </Text>
      <StackParamScreen />
    </View>
  );
};

export default App;
