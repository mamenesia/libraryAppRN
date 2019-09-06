import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

import BookCard from '../components/BookCard';

class Genre extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   books: [],
    // };
  }

  render() {
    const genre = this.props.navigation.getParam('genre');
    const books = this.props.books.bookList.filter(book => book.genre == genre);
    // console.log(books);
    return (
      <ScrollView>
        <Text style={styles.title}>{genre}</Text>
        <View style={styles.bookContainer}>
          {books.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  this.props.navigation.navigate('Detail', {
                    book_id: item.book_id,
                  })
                }>
                <BookCard title={item.title} imageUri={item.image_url} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bookContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 20,
    // paddingRight: 20,
  },
  title: {
    marginTop: 30,
    marginLeft: 30,
    fontFamily: 'Airbnb Cereal App',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 23,
    color: '#303031',
  },
  cardBookImage: {
    width: 140,
    height: 180,
    borderRadius: 5,
  },
  rating: {
    marginTop: -15,
  },
});

const mapStateToProps = state => {
  return {books: state.books};
};

export default connect(mapStateToProps)(Genre);
