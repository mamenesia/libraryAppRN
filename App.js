import React, {Component} from 'react';
// import {Image, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import {Button, Text, Icon, Footer, FooterTab} from 'native-base';

import {Provider} from 'react-redux';
import store from './src/public/store';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Profile from './src/screens/Profile';
import History from './src/screens/History';
import Detail from './src/screens/Detail';
import Genre from './src/screens/Genre';
import Search from './src/screens/Search';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        header: null,
      },
    },
    Genre: {screen: Genre},
    Search: {screen: Search},
  },
  {initialRouteName: 'Home'},
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteName: 'Profile'},
);

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    History: {screen: History},
    Profile: ProfileStack,
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    activeColor: 'blue',
    inactiveColor: 'black',
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              light
              vertical
              // active={props.navigationState.index == 0}
              onPress={() => props.navigation.navigate('Home')}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              light
              vertical
              // active={props.navigationState.index == 1}
              onPress={() => props.navigation.navigate('History')}>
              <Icon type="FontAwesome" name="history" />
              <Text>History</Text>
            </Button>
            <Button
              light
              vertical
              // active={props.navigationState.index == 2}
              onPress={() => props.navigation.navigate('Profile')}>
              <Icon type="FontAwesome" name="user-circle" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
