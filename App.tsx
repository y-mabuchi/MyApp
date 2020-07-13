import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>1行目</Text>
      <Text>2行目</Text>
    </View>
  );
}
