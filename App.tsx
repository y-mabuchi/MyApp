import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const A = () => {
  React.useEffect(() => {
    console.log('A effect');
    return () => console.log('A cleanup');
  });

  return <Text>A</Text>;
};

const B = () => {
  React.useEffect(() => {
    console.log('B effect');
    return () => console.log('B cleanup');
  });

  return <Text>B</Text>;
};

export default function App() {
  const [needsToShowA, setNeedsToShowA] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text onPress={() => setNeedsToShowA(!needsToShowA)}>切り替え</Text>
      {needsToShowA ? <A /> : <B />}
    </View>
  );
}
