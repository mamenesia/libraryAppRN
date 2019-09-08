import React, {Component} from 'react';
import {Text, StyleSheet, Alert, ScrollView} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
} from 'native-base';
import {connect} from 'react-redux';
import {login} from '../public/actions/user';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async () => {
    const {username, password} = this.state;
    await this.props.dispatch(login(username, password));
    // .then(async res => {
    //   if (res.action.payload.data.status === 400) {
    //     this.setState({username: '', password: ''});
    //     Alert.alert(`${res.action.payload.data.message}`);
    //   } else if (res.action.payload.data.status === 200) {
    //     const token = res.action.payload.data.token;
    //     await AsyncStorage.setItem('token', token, err => console.log(err));
    //     Alert.alert(`${res.action.payload.data.message}`);
    //     this.props.navigation.navigate('Home');
    //   } else {
    //     this.setState({username: '', password: ''});
    //     Alert.alert("Username or Email doesn'nt exist!");
    //   }
    // })
    // .catch(err => {
    //   console.error(err);
    // });
  };

  async componentDidMount() {
    let checkToken = await AsyncStorage.getItem('token', (err, res) => {
      console.log(err, res);
    });
    if (checkToken !== null) {
      this.props.navigation.navigate('Profile');
    }
  }
  render() {
    return (
      <ScrollView>
        <Container>
          <Text style={styles.header}>Here To Get Welcomed !</Text>
          <Content style={styles.form}>
            <Form onSubmit={this.handleSubmit}>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input
                  required
                  // autoFocus={true}
                  onChangeText={text => this.setState({username: text})}
                  value={this.state.username}
                />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input
                  required
                  secureTextEntry={true}
                  onChangeText={text =>
                    this.setState({
                      password: text,
                    })
                  }
                  value={this.state.password}
                />
              </Item>
            </Form>
          </Content>
          <Button
            rounded
            dark
            style={styles.signInButton}
            onPress={this.handleSubmit}>
            <Icon type="FontAwesome" name="arrow-right" />
          </Button>
          <Text
            style={styles.signup}
            onPress={() => this.props.navigation.navigate('Register')}>
            Sign Up
          </Text>
          <Text style={styles.forgotPassword}>Forgot Password ?</Text>
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    position: 'relative',
  },
  header: {
    position: 'absolute',
    width: 214,
    height: 70,
    left: 33,
    top: 110,
    fontSize: 24,
    lineHeight: 31,
    fontWeight: 'bold',
    color: '#4B4C72',
    fontFamily: 'Airbnb Cereal App',
  },
  form: {
    position: 'absolute',
    width: 284,
    left: 36,
    top: 225,
  },
  signInButton: {
    position: 'absolute',
    width: 54,
    height: 54,
    left: 266,
    top: 390,
    backgroundColor: '#090B28',
  },
  signup: {
    position: 'absolute',
    width: 126,
    height: 43,
    left: 36,
    top: 507,
    fontFamily: 'Airbnb Cereal App',
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 17,
    textDecorationLine: 'underline',
  },
  forgotPassword: {
    position: 'absolute',
    width: 126,
    height: 43,
    left: 225,
    top: 507,
    fontFamily: 'Airbnb Cereal App',
    fontSize: 13,
    lineHeight: 17,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#4B4C72',
  },
});

const mapStateToProps = state => {
  return {user: [state.username, state.password]};
};
export default connect(mapStateToProps)(Login);
