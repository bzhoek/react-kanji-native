import React from 'react'
import {List, FlatList, StyleSheet, Text, View, SafeAreaView} from 'react-native'
import {ListView} from 'realm/react-native'
import KanjiService from './src/KanjiService'
import KanjiModel from './src/KanjiModel'

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class App extends React.Component {
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
    return this.realmList();
  }

  realmList() {
    return <View style={styles.container}>
      <Text>Shake your phone to open the developer menu.</Text>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItem}/>
    </View>
  }

  renderItem(item) {
    return <Text>{item.literal} - {item.meaning}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
