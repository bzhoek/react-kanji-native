import React, {Component} from 'react';
import {WebView} from 'react-native';
import html from './Kanji.html'

class Kanji extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let {drawing} = this.props
    return (
      <WebView source={html} style={{flex: 1}}
               injectedJavaScript={`document.getElementById('kanji-strokes').innerHTML = '${drawing}'; animate_paths()`}/>
    );
  }
}

export default Kanji