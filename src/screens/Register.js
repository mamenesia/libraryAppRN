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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <Container>
        <Text style={styles.header}>Create an Account, Join Us Today !</Text>
        <Content style={styles.form}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
        <Button rounded dark style={styles.signUpButton}>
          <Icon type="FontAwesome" name="arrow-right" />
        </Button>
        <Text
          style={styles.login}
          onPress={() => this.props.navigation.navigate('Login')}>
          Login
        </Text>
        <Text style={styles.remark}>Book is window to the world</Text>
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
    top: 200,
  },
  signUpButton: {
    position: 'absolute',
    width: 54,
    height: 54,
    left: 266,
    top: 410,
    backgroundColor: '#090B28',
  },
  login: {
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
  remark: {
    position: 'absolute',
    width: 100,
    height: 43,
    left: 225,
    top: 507,
    fontFamily: 'Airbnb Cereal App',
    fontSize: 13,
    lineHeight: 17,
    // textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#4B4C72',
  },
});

export default Register;
