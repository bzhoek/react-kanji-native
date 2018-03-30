import React from "react"
import {Text, View} from 'react-native';

import KanjiDetail from "./KanjiDetail"
import KanjiService from "../src/KanjiService"
import RandomizedLookup from './RandomizedLookup'

export default class KanjiDaily extends React.Component {
  constructor(props) {
    super(props)
    this.lookup = new RandomizedLookup()
    let frequency = this.lookup.forDate(this.props.forDate)
    let kanjis = KanjiService.byFreq(frequency)
    this.state = {
      frequency: frequency,
      drawing: kanjis[0].drawing,
      meaning: kanjis[0].meaning
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <Text>{this.props.forDate.toLocaleDateString()}</Text>
        <Text>{this.state.frequency}</Text>
        <Text>{this.kanjiForDate()}</Text>
        <KanjiDetail drawing={this.state.drawing} meaning={this.state.meaning}/>
      </View>
    )
  }

  kanjiForDate() {
    let kanjis = KanjiService.byFreq(this.lookup.forDate(this.props.forDate))
    return kanjis[0].literal
  }
}