import React from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
  },
  label: {
    height: 400,
  },
});

interface Item {
  id: string;
  title: string;
}

const data: Array<Item> = [
  { id: 'first', title: 'ひとつめ' },
  { id: 'second', title: 'ふたつめ' },
  { id: 'third', title: 'みっつめ' },
  { id: 'fourth', title: 'よっつめ' },
  { id: 'fifth', title: 'いつつめ' },
  { id: 'sixth', title: 'むっつめ' },
  { id: 'seventh', title: 'ななつめ' },
];

export default function App() {
  const list = React.useRef<FlatList<Item>>(null);
  const scrollToThird = React.useCallback(() => {
    list?.current?.scrollToIndex({ index: 2 });
  }, [list]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={scrollToThird}>
        <Text>Scroll to third</Text>
      </TouchableOpacity>
      <FlatList
        ref={list}
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.label} key={item.id}>
            {item.title}
          </Text>
        )}
      />
    </View>
  );
}
