import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Donate extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.notice}>DONATE SCREEN!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notice: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 18,
    lineHeight: 23,
    color: '#303031',
  },
});
