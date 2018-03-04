import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Kanji from './components/Kanji'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Shake your phone to open the developer menu.</Text>
        <Kanji/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
