import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 32,
  },
});

export default function App() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  React.useEffect(() => {
    Alert.alert('count1 is incremented.');
  }, [count1, count2]);

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          setCount1(count1 + 1);
        }}
        style={styles.label}
      >
        {count1}
      </Text>
      <Text
        onPress={() => {
          setCount2(count2 + 1);
        }}
        style={styles.label}
      >
        {count2}
      </Text>
    </View>
  );
}
