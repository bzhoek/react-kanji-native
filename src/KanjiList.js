import React from "react"
import {StyleSheet, Text, View} from 'react-native';
import KanjiDetail from "./KanjiDetail"
import KanjiService from "../src/KanjiService"
import {ListView} from "realm/react-native"

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.literal !== r2.literal});

export default class KanjiList extends React.Component {

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
    this.props.navigator.push({
      component: KanjiDetail,
      title: item.literal,
      passProps: {
        drawing: item.drawing,
        meaning: item.meaning
      },
    });
  }

  renderItem(item) {
    return <Text style={styles.titleText} onPress={() => this._onForward(item)}>{item.literal} - {item.meaning}</Text>
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 24,
  },
});
