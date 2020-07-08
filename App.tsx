import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  label: {
    marginTop: 100,
    padding: 8,
    fontSize: 24,
  },
});

interface Props {
  backgroundColor: string;
  color: string;
  label: string;
}

export default function CustomLabel(props: Props) {
  const { backgroundColor, color, label } = props;

  return <Text style={[styles.label, { backgroundColor, color }]}>{label}</Text>;
}

CustomLabel.defaultProps = {
  backgroundColor: '#008080',
  color: 'white',
  label: 'hello',
};
