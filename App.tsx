import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});

export default function App() {
  const [state, setState] = React.useState(true);

  return (
    <Text
      style={styles.container}
      onPress={() => {
        setState(!state);
      }}
    >
      state is {state.toString()}
    </Text>
  );
}
