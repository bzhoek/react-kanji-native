import React from 'react'
import {List, NavigatorIOS, StyleSheet} from 'react-native'
import KanjiList from './components/KanjiList'

export default class App extends React.Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: KanjiList,
          title: 'All Kanji'
        }}
        style={{flex: 1}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
