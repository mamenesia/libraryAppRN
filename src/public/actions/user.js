import Axios from 'axios';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import {withNavigation} from 'react-navigation';

export const login = (username, password) => {
  return {
    type: 'LOGIN_USER',
    payload: Axios.post(
      'https://mysterious-badlands-23204.herokuapp.com/login',
      {
        username,
        password,
      },
    ).then(async res => {
      console.log(res);
      if (res.data.status === 200) {
        const token = res.data.token;
        await AsyncStorage.setItem('token', token, err => console.log(err));
        Alert.alert('Success!', res.data.message);
        Alert.alert(
          'Success!',
          res.data.message,
          [
            {
              text: 'OK',
              onPress: () =>
                Alert.alert('Hey, User', 'Please go to home with tab below'), //this.props.navigation.navigate('Home')
            },
          ],
          {
            cancelable: false,
          },
        );
      } else {
        Alert.alert('Failed!', res.data.message);
        // Alert.alert('Failed!', 'Username is does not exist');
      }
    }),
  };
};

export const register = (username, email, password) => {
  return {
    type: 'REGISTER_USER',
    payload: Axios.post(
      'https://mysterious-badlands-23204.herokuapp.com/register',
      {
        username,
        email,
        password,
      },
    ).then(res => {
      console.log(res);
      if (res.data.status === 200) {
        Alert.alert('Success!', res.data.message);
        Alert.alert(
          'Success!',
          res.data.message,
          [
            {
              text: 'OK',
              onPress: () =>
                Alert.alert('Hey New User', 'Press login button left below'), //this.props.navigation.goBack(),
            },
          ],
          {
            cancelable: false,
          },
        );
      } else {
        Alert.alert('Failed!', res.data.message);
        // Alert.alert('Failed!', 'Username is does not exist');
      }
    }),
  };
};
