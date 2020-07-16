import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    width: 300,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('TouchableOpacity');
        }}
      >
        <View style={styles.button}>
          <Text>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>
      <TouchableHighlight disabled={true} onPress={() => console.log('TouchableHighlight')}>
        <View style={styles.button}>
          <Text>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
