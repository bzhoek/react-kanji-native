import React from 'react';
import {NavigatorIOS} from 'react-native';
import {TabNavigator} from 'react-navigation';

import KanjiList from './src/KanjiList'
import KanjiDaily from './src/KanjiDaily'

class DailyScreen extends React.Component {
  render() {
    return (
      <KanjiDaily forDate={new Date()}/>
    )
  }
}

class LookupScreen extends React.Component {
  render() {
    return (
      <NavigatorIOS initialRoute={{component: KanjiList, title: 'All Kanji'}} style={{flex: 1}}/>
    )
  }
}

export default TabNavigator({
  Daily: {screen: DailyScreen},
  Lookup: {screen: LookupScreen},
})