import React from "react";
import { Text, View } from "react-native";


class App extends React.Component{
  render() {
    return (
      <View
      style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
      }}>

        <Text
          style={{
            fontSize:20,
            fontWeight:"bold"
          }}>Node Test 2</Text>
      </View>
    );
  }
}

export default App;
