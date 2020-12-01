import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.fillerContainer}></View>

      <View style={styles.titleContainer}>
        <Text style={styles.text}>Woolala!</Text>
        {/* <Text style={{ color: "red", fontWeight: "bold", textAlign: 'center', fontSize: 30}}>Huat Ah!</Text>         */}
      </View>
    
    <View style={styles.fillerContainer}></View>

    <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40E0D0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillerContainer: {
    padding: 10,
    backgroundColor: "blue",
    flex: 0.25,
    width: "50%",
  },
  titleContainer: {
    backgroundColor: "purple",
    padding: 10,
    margin: 10,
    flex: 0.5,
    justifyContent: 'center',
    borderRadius: 20,
    width: "90%",
    borderWidth: 10,
    borderColor: "white",
  },
  
  text: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
  }
});
