import React, {Component} from 'react';
import {Text, View, WebView} from 'react-native';
import html from './Kanji.html'

export default class KanjiDetail extends Component {
  render() {
    let drawing = this.props.drawing.replace(/(\r\n|\n|\r)/gm, "")
    let {meaning} = this.props
    return (
      <View style={{flex: 1}}>
        <WebView source={html} style={{flex: 1}} key={this.props.literal}
          injectedJavaScript={`document.getElementById('kanji-strokes').innerHTML = '${drawing}'; animate_paths()`}/>
        <Text style={{flex: 1}}>{meaning}</Text>
      </View>
    )
  }
}