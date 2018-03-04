import React, {Component} from 'react';
import {WebView} from 'react-native';
import html from './Kanji.html'

class Kanji extends Component {

  render() {
    return (
      <WebView source={html} style={{flex: 1}}
      />
    );
  }
}

export default Kanji