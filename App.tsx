import React from 'react';
import { ViewStyle, Text, View } from 'react-native';

export default function MyComponent() {
  const containerStyle: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={containerStyle}>
      <Text>Hello</Text>
    </View>
  );
}
