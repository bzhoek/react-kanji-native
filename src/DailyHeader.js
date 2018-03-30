import React from "react"
import {Text, View} from 'react-native';

export default class DailyHeader extends React.Component {
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>{this.props.forDate.toLocaleDateString()}</Text>
        <Text>{this.props.frequency}</Text>
      </View>
    )
  }
}