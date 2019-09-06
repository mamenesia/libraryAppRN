import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import BookCard from '../components/BookCard';

class Genre extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Genre Book</Text>
        <View style={styles.bookContainer}>
          <TouchableOpacity>
            <BookCard
              title="Drowning"
              imageUri="https://images-na.ssl-images-amazon.com/images/I/81c3IwhrRtL.__BG0,0,0,0_FMpng_AC_UL270_SR180,270_.jpg"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <BookCard
              title="Drowning"
              imageUri="https://images-na.ssl-images-amazon.com/images/I/81c3IwhrRtL.__BG0,0,0,0_FMpng_AC_UL270_SR180,270_.jpg"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <BookCard
              title="Drowning"
              imageUri="https://images-na.ssl-images-amazon.com/images/I/81c3IwhrRtL.__BG0,0,0,0_FMpng_AC_UL270_SR180,270_.jpg"
            />
          </TouchableOpacity>
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

export default Genre;
