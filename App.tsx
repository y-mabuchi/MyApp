import React from 'react';
import { Text, View, StyleSheet, Image, PixelRatio } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  base: {
    fontSize: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  red: {
    color: 'red',
  },
  imagesize: {
    width: 400,
    height: 210,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://saku-deli.site/img/tejikomi-tonkatsu.png' }} style={styles.imagesize} />
    </View>
  );
}
