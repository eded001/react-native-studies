import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.key}
        ListHeaderComponent={() => <Header />}
        ListEmptyComponent={() => <></>}
      >
      </FlatList>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingVertical: 60,
  },
});
