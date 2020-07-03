import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texts: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  text1: {
    fontSize: 16,
  },
  text2: {
    fontSize: 32,
  },
  text3: {
    fontSize: 16,
  },
});

export default function MyComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.text1}>tax</Text>
        <Text style={styles.text2}>10</Text>
        <Text style={styles.text3}>%</Text>
      </View>
    </View>
  );
}
