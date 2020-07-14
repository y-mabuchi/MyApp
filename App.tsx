import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  block: {
    width: 300,
    height: 400,
  },
  red: {
    backgroundColor: 'red',
  },
  green: {
    backgroundColor: 'green',
  },
  blue: {
    backgroundColor: 'blue',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
});

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.block, styles.red]}>RED</Text>
      <Text style={[styles.block, styles.green]}>GREEN</Text>
      <Text style={[styles.block, styles.blue]}>BLUE</Text>
      <Text style={[styles.block, styles.yellow]}>YELLOW</Text>
    </ScrollView>
  );
}
