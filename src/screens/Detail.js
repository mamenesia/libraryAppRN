import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Left, Body, Button, Icon, Title, Card, CardItem} from 'native-base';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import {getHistory} from '../public/actions/history';
import {rentBook, returnBook} from '../public/actions/books';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      user: '',
      history: [],
    };
    this.handleBorrow = this.handleBorrow.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }
  componentDidMount = async () => {
    await this.props.dispatch(getHistory());
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
    const book_id = this.props.navigation.getParam('book_id');
    this.setState({book_id: book_id});
    const book = this.props.books.bookList.filter(
      item => item.book_id == book_id,
    )[0];
    this.setState({book: book});
    if (this.state.token) {
      const book_id = this.state.book_id;
      this.setState({
        history: this.props.history.historyData.filter(history => {
          return (
            history.book_id == book_id &&
            history.user_id == user.id &&
            history.return_at == 'false'
          );
        }),
      });
    }
  };

  handleBorrow = async () => {
    const user_id = this.state.user.id;
    const book_id = this.state.book_id;
    await this.props.dispatch(rentBook(book_id, user_id));
    Alert.alert(
      'Success!',
      'Book Borrowed',
      [
        {
          text: 'OK',
          onPress: () => this.props.navigation.navigate('History'),
        },
      ],
      {cancelable: false},
    );

    // this.props.navigation.navigate('Detail', {book_id: book_id});
  };
  handleReturn = async () => {
    const user_id = this.state.user.id;
    const book_id = this.state.book_id;
    await this.props.dispatch(returnBook(book_id, user_id));
    // this.props.navigation.navigate('Detail', {book_id: book_id});
    Alert.alert(
      'Success!',
      'Book Borrowed',
      [
        {
          text: 'OK',
          onPress: () => this.props.navigation.navigate('History'),
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    const {history} = this.state;
    const book_id = this.props.navigation.getParam('book_id');
    const book = this.props.books.bookList.filter(
      item => item.book_id == book_id,
    )[0];
    // console.log(book);
    return (
      <SafeAreaView>
        <ScrollView>
          <Image
            style={styles.imageHeader}
            source={{
              uri: `${book.image_url}`,
            }}
          />
          <View span transparent>
            <Left style={styles.backButton}>
              <TouchableOpacity
                transparent
                onPress={() => this.props.navigation.goBack()}>
                <Icon style={styles.icon} name="arrow-back" />
              </TouchableOpacity>
            </Left>
            <Body style={styles.headerText}>
              <Title style={styles.headerTitle}>{book.title}</Title>
              <Text style={styles.headerDate}>
                {String(book.released_at).substr(0, 16)}
              </Text>
            </Body>
          </View>
          <View style={styles.cardBook}>
            <Card>
              <CardItem cardBody>
                <Image
                  style={styles.cardBookImage}
                  source={{
                    uri: `${book.image_url}`,
                  }}
                />
              </CardItem>
            </Card>
          </View>
          <View style={styles.detail}>
            <View>
              <Text style={styles.detailText}>{book.desc}</Text>
              <View>
                {this.state.user ? (
                  book.status == 'Available' ? (
                    <TouchableOpacity>
                      <Button
                        style={styles.actionRentButton}
                        onPress={this.handleBorrow}>
                        <Text style={styles.actionButtonText}> Borrow </Text>
                      </Button>
                    </TouchableOpacity>
                  ) : history.length > 0 ? (
                    <TouchableOpacity>
                      <Button
                        style={styles.actionReturnButton}
                        onPress={this.handleReturn}>
                        <Text style={styles.actionButtonText}> Return </Text>
                      </Button>
                    </TouchableOpacity>
                  ) : (
                    <Button style={styles.actionButton}>
                      <Text style={styles.actionButtonText}>Not Available</Text>
                    </Button>
                  )
                ) : (
                  <TouchableOpacity>
                    <Button
                      style={styles.actionButton}
                      onPress={() => this.props.navigation.navigate('Login')}>
                      <Text style={styles.actionButtonText}>Sign In</Text>
                    </Button>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imageHeader: {
    position: 'absolute',
    top: -20,
    left: 0,
    width: '100%',
    height: 300,
    borderRadius: 10,
    opacity: 0.7,
    backgroundColor: 'black',
  },
  backButton: {
    position: 'absolute',
    left: 19,
    top: 20,
  },
  icon: {color: 'white'},
  headerText: {
    // position: 'absolute',
    width: 197,
    height: 44,
    // left: 10,
    // top: 200,
    marginTop: 220,
    marginLeft: -180,
  },
  headerTitle: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 23,
    color: 'white',
  },
  headerDate: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 17,
    color: 'white',
  },
  cardBook: {
    position: 'absolute',
    right: 20,
    top: 160,
  },
  cardBookImage: {
    width: 120,
    height: 170,
    borderRadius: 5,
  },
  detail: {
    // position: 'absolute',
    // width: 'auto',
    // left: 29,
    // right: 29,
    // top: 350,
    marginTop: 90,
    marginHorizontal: 29,
  },
  detailText: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
    color: '#303031',
  },
  actionRentButton: {
    width: 164,
    height: 39,
    backgroundColor: '#F4CF5D',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 20,
    marginVertical: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  actionReturnButton: {
    width: 164,
    height: 39,
    backgroundColor: '#0B0870',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 20,
    marginVertical: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  actionButton: {
    width: 164,
    height: 39,
    backgroundColor: 'red',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 20,
    marginVertical: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  actionButtonText: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 15,
    lineHeight: 20,
    color: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const mapStateToProps = state => {
  return {books: state.books, history: state.history};
};
export default connect(mapStateToProps)(Detail);
