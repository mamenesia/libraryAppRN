import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Button} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('token', (err, res) => {
      if (!err) {
        return res;
      } else {
        return null;
      }
    });
    this.setState({token: token});
    const user = decode(this.state.token);
    this.setState({user: user});
  };
  render() {
    const {token, user} = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <ImageBackground
              style={{width: '100%', height: '100%'}}
              source={{
                uri:
                  'https://s26162.pcdn.co/wp-content/uploads/2019/07/new.york_.public.library.original.8262.jpg',
              }}
            />
          </View>
          <Image
            style={styles.avatar}
            source={{
              uri:
                'https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png',
            }}
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{user ? user.username : 'Guest'}</Text>
              <Text style={styles.info}>
                {token ? 'Registered User' : 'Free User'}
              </Text>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
                electram expetendis, omittam deseruisse consequuntur ius an,
              </Text>
              {token ? (
                <View>
                  <View style={styles.donateContainer}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={async () => {
                        await AsyncStorage.removeItem('token');
                        this.props.navigation.navigate('Login');
                      }}>
                      <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.donateButton}
                      onPress={() => this.props.navigation.navigate('Donate')}>
                      <Text style={styles.donateText}>Donate Book</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => this.props.navigation.navigate('Login')}>
                      <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() =>
                        this.props.navigation.navigate('Register')
                      }>
                      <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

// const background =
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PcRnQpvqW4NtOcaaR_R-lHFngIrR27o4e-o_6AlROkGR9W8kVA';
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#9A2B6B',
    // backgroundImage: `url(${background})`,
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  // name: {
  //   fontSize: 22,
  //   color: '#FFFFFF',
  //   fontWeight: '600',
  // },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 20,
    color: '#5E21BF',
    marginTop: 0,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 50,
    marginRight: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    width: 150,
    borderRadius: 30,
    backgroundColor: '#D91780',
  },
  buttonText: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 15,
    lineHeight: 20,
    color: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  donateContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  donateButton: {
    marginTop: 20,
    marginRight: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    width: 150,
    borderRadius: 10,
    backgroundColor: '#9AF833',
  },
  donateText: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 18,
    lineHeight: 20,
    color: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Profile;
