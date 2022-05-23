import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from "./views/Router";
import {WebView} from "react-native";

export default function App() {
  const PolicyHTML = require('./views/index.html');

<WebView
  source={PolicyHTML}
  style={{flex: 1}}
 />
 
  return (
    /*<View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>*/
    <div className="App">
      <Router/>
    </div>
  );
}