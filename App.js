import React from 'react'
import {List, FlatList, StyleSheet, Text, View} from 'react-native'
import {ListView} from 'realm/react-native'
import KanjiService from './src/KanjiService'
import KanjiModel from './src/KanjiModel'
import Realm from "realm"

const realm = new Realm({schema: [KanjiModel]})

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [{"literal": "習"}],
    }
  }

  componentDidMount() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let query=realm.objects('Kanji');
    this.setState({
      dataSource:ds.cloneWithRows(query)
    })
  }

  render() {
    return this.flatList();
  }

  realmList() {
    return <View style={styles.container}>
      <Text>Shake your phone to open the developer menu.</Text>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={({item}) => <Text>{item.literal}</Text>}/>
    </View>
  }

  flatList() {
    return <View style={styles.container}>
      <Text>Shake your phone to open the developer menu.</Text>
      <FlatList
        data={this.state.data}
        renderItem={({item}) => <Text>{item.literal}</Text>}/>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
