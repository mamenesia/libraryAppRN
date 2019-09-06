import Axios from 'axios';
import {AsyncStorage} from 'react-native';

export const login = (username, password) => {
  return {
    type: 'LOGIN_USER',
    payload: Axios.post('http://192.168.37.2:8080/login', {
      username,
      password,
    })
      .then(res => {
        if (res.data.status === 200) {
          const token = res.data.token;
          AsyncStorage.setItem('token', token);
          setInterval(() => this.props.navigation.navigate('Home'), 2000);
        } else {
          setInterval(() => this.props.navigation.navigate('Login'), 2000);
        }
      })
      .catch(err => console.log(err)),
  };
};

export const register = (username, email, password) => {
  return {
    type: 'REGISTER_USER',
    payload: Axios.post('http://192.168.37.2:8080/register', {
      username,
      email,
      password,
    }),
  };
};
