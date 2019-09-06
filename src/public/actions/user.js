import Axios from 'axios';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const login = (username, password) => {
  return {
    type: 'LOGIN_USER',
    payload: Axios.post('http://192.168.56.1:8080/login', {
      username,
      password,
    }).then(async res => {
      console.log(res);
      if (res.data.status === 200) {
        const token = res.data.token;
        await AsyncStorage.setItem('token', token, err => console.log(err));
        Alert.alert('Success!', res.data.message);
        Alert.alert(
          'Success!',
          res.data.message,
          [{text: 'OK', onPress: () => this.props.navigation.native('Home')}],
          {cancelable: false},
        );
      } else {
        Alert.alert('Failed!', res.data.message);
        Alert.alert('Failed!', 'Username is does not exist');
      }
    }),
  };
};

export const register = (username, email, password) => {
  return {
    type: 'REGISTER_USER',
    payload: Axios.post('http://192.168.56.1:8080/register', {
      username,
      email,
      password,
    }),
  };
};
