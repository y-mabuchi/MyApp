import React from 'react';
import { StyleSheet, Alert, View, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function App() {
  function onPress() {
    Alert.alert('title', 'message', [
      {
        text: 'OK',
        onPress: () => {
          console.warn('ok');
        },
        style: 'default',
      },
      {
        text: 'Cancel',
        onPress: () => {
          console.warn('cancel');
        },
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text>Alert</Text>
      </TouchableOpacity>
    </View>
  );
}
