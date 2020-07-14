import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
  },
  label: {
    height: 400,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
  header: {
    backgroundColor: 'blue',
  },
  footer: {
    backgroundColor: 'green',
  },
});

const data = [
  { id: 'first', title: 'ひとつめ' },
  { id: 'second', title: 'ふたつめ' },
  { id: 'third', title: 'みっつめ' },
];

export default function App() {
  // const [refreshing, setRefreshing] = React.useState(false);
  // const onRefresh = React.useCallback(() => {
  //   try {
  //     setRefreshing(true);
  //     setTimeout(() => {
  //       data.unshift({
  //         id: new Date().getTime().toString(),
  //         title: 'foo',
  //       });
  //     }, 200);
  //   } finally {
  //     setRefreshing(false);
  //   }
  // }, []);

  const onEndReached = React.useCallback(() => {
    setTimeout(() => {
      data.push({
        id: new Date().getTime().toString(),
        title: 'bar',
      });
    }, 200);
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => (
        <Text style={styles.label} key={item.id}>
          {item.title}
        </Text>
      )}
      onEndReached={onEndReached}
      // refreshing={refreshing}
      // onRefresh={onRefresh}
      // ListHeaderComponent={() => <Text style={styles.header}>Header</Text>}
      // ListFooterComponent={() => <Text style={styles.footer}>Footer</Text>}
      // ItemSeparatorComponent={() => <View style={styles.separator} />}
      // horizontal
      // numColumns={2}
    />
  );
}
