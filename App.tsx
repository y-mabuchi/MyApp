import React from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';

interface Props {
  children: React.ReactNode;
  style: ViewStyle;
  onPress: () => void;
}

function ChildComponent(props: Props) {
  const { children, style, onPress } = props;

  return (
    <Text style={style} onPress={onPress}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
  },
});

export default function App() {
  return (
    <ChildComponent
      onPress={() => {
        console.log('hello');
      }}
      style={styles.button}
    >
      Press Me!
    </ChildComponent>
  );
}
