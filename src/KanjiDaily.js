import React from "react"
import {PanResponder, Text, View} from 'react-native';

import DailyHeader from "./DailyHeader"
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
      forDate: props.forDate,
      frequency: frequency,
      kanji: kanjis[0],
      drawing: kanjis[0].drawing,
      meaning: kanjis[0].meaning
    }

    this.handleSwipe = this.handleSwipe.bind(this);
  }

  handleSwipe(delta) {
    let other = this.state.forDate
    other.setDate(other.getDate() + delta)
    let frequency = this.lookup.forDate(other)
    let kanjis = KanjiService.byFreq(frequency)
    this.setState({
      forDate: other,
      frequency: frequency,
      kanji: kanjis[0],
      drawing: kanjis[0].drawing,
      meaning: kanjis[0].meaning
    })
  }

  componentWillMount() {
    console.log("Mounter")
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        console.log(`Granted ${gestureState.x0}`)
      },
      onPanResponderRelease: (e, gestureState) => {
        this.handleSwipe(gestureState.dx > 0 ? -1 : +1)
      }
    });
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch', marginTop: 20}}>
        <View {...this._panResponder.panHandlers}>
          <DailyHeader forDate={this.state.forDate} frequency={this.state.frequency}/>
        </View>
        <KanjiDetail literal={this.state.kanji.literal} drawing={this.state.drawing} meaning={this.state.meaning}/>
      </View>
    )
  }

  kanjiForDate() {
    let kanjis = KanjiService.byFreq(this.lookup.forDate(this.state.forDate))
    return kanjis[0].literal
  }
}