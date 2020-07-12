import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 160,
    height: 32,
    borderWidth: 1,
    padding: 4,
  },
});

export default function App() {
  const ref = React.useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <TextInput ref={ref} style={styles.input}>
        <Text
          onPress={() => {
            ref?.current?.focus();
          }}
        >
          focus
        </Text>
      </TextInput>
    </View>
  );
}
