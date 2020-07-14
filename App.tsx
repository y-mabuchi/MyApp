import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 210,
  },
  label: {
    color: 'white',
    fontSize: 64,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./logo-uoten.png')} style={styles.image}>
        <Text style={styles.label}>React Native</Text>
      </ImageBackground>
    </View>
  );
}
