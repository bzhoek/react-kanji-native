import React from 'react'
import {List, FlatList, NavigatorIOS, StyleSheet, Text, View, SafeAreaView} from 'react-native'
import {ListView} from 'realm/react-native'
import KanjiService from './src/KanjiService'
import Kanji from './components/Kanji'

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

  flatList() {
    return <SafeAreaView style={styles.container}>
      <Text>Shake your phone to open the developer menu.</Text>
      <FlatList
        data={this.state.data}
        renderItem={({item}) => <Text>Hallo</Text>}/>
    </SafeAreaView>
  }
}

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class KanjiList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: ds
    }
  }

  componentDidMount() {
    let query = KanjiService.findAll()
    this.setState({
      dataSource: ds.cloneWithRows(query)
    })
  }

  render() {
    return <View style={styles.container}>
      <Text>Shake your phone to open the developer menu.</Text>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItem.bind(this)}/>
    </View>
  }

  _onForward(item) {
    console.log(`Hallo, ${item.literal}`)
    this.props.navigator.push({
      component: Kanji,
      title: item.literal,
      passProps: {drawing: item.drawing.replace(/(\r\n|\n|\r)/gm, "")},
    });
  }

  renderItem(item) {
    return <Text onPress={() => this._onForward(item)}>{item.literal} - {item.meaning}</Text>
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
