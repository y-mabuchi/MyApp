import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>最初の文章。</Text>
      <Text>改行されない文章。</Text>
    </View>
  );
}
