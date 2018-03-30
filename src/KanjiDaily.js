import React from "react"
import {PanResponder, SafeAreaView, View} from 'react-native';

import DailyHeader from "./DailyHeader"
import KanjiDetail from "./KanjiDetail"
import KanjiService from "../src/KanjiService"
import RandomizedLookup from './RandomizedLookup'

export default class KanjiDaily extends React.Component {
  constructor(props) {
    super(props)
    this.lookup = new RandomizedLookup()
    this.state = this.stateForDate(this.props.forDate)

    this.handleSwipe = this.handleSwipe.bind(this);
  }

  stateForDate(date) {
    let frequency = this.lookup.forDate(date)
    let kanjis = KanjiService.byFreq(frequency)
    return {
      forDate: date,
      kanji: kanjis[0],
    }
  }

  handleSwipe(delta) {
    let newDate = this.state.forDate
    newDate.setDate(newDate.getDate() + delta)
    this.setState(this.stateForDate(newDate))
  }

  componentWillMount() {
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
    let {literal, frequency, drawing, meaning} = this.state.kanji
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'stretch'}}>
        <View {...this._panResponder.panHandlers}>
          <DailyHeader forDate={this.state.forDate} frequency={frequency}/>
        </View>
        <KanjiDetail literal={literal} drawing={drawing} meaning={meaning}/>
      </SafeAreaView>
    )
  }
}