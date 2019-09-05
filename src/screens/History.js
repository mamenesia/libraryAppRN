import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import historyImg from '../../assets/history.png';

class History extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.screen}>
        <Image source={historyImg} />
        <Text>The History Screen!</Text>
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
});

export default History;
