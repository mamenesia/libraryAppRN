import Axios from 'axios';
import {AsyncStorage} from 'react-native';

export const login = (username, password) => {
  return {
    type: 'LOGIN_USER',
    payload: Axios.post(
      'https://mysterious-badlands-23204.herokuapp.com/login',
      {
        username,
        password,
      },
    )
      .then(res => {
        if (res.data.status === 200) {
          const token = res.data.token;
          AsyncStorage.setItem('token', token);
          this.props.navigation.navigate('Home');
        } else {
          this.props.navigation.navigate('Register');
        }
      })
      .catch(err => console.log(err)),
  };
};
