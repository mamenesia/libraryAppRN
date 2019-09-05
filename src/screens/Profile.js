import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.screen}>
        <Text>The Profile Screen!</Text>
        <Button onPress={() => this.props.navigation.navigate('Login')}>
          <Text>Login</Text>
        </Button>
        <Button onPress={() => this.props.navigation.navigate('Register')}>
          <Text>Register</Text>
        </Button>
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

export default Profile;
