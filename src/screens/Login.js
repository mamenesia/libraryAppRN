import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername = e => {
    this.setState({username: e.target.value});
  };
  handlePassword = e => {
    this.setState({password: e.target.value});
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {username, password} = this.state;
    await this.props.dispatch(login(username, password));
  };

  component;
  render() {
    return (
      <Container>
        <Text style={styles.header}>Here To Get Welcomed !</Text>
        <Content style={styles.form}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={() => this.handleUsername} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={() => this.handlePassword} />
            </Item>
          </Form>
        </Content>
        <Button
          rounded
          dark
          style={styles.signInButton}
          onPress={() => this.handleSubmit}>
          <Icon type="FontAwesome" name="arrow-right" />
        </Button>
        <Text
          style={styles.signup}
          onPress={() => this.props.navigation.navigate('Register')}>
          Sign Up
        </Text>
        <Text style={styles.forgotPassword}>Forgot Password ?</Text>
      </Container>
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
