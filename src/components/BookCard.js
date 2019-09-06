import React, {Component} from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {Card, CardItem, Left} from 'native-base';
import {Rating} from 'react-native-ratings';

export default class BookCard extends Component {
  render() {
    return (
      <Card style={styles.cardBook}>
        <CardItem cardBody>
          <Image
            style={styles.cardBookImage}
            source={{
              uri: `${this.props.imageUri}`,
            }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Text>{this.props.title.substr(0, 15)}...</Text>
          </Left>
        </CardItem>
        <CardItem style={styles.rating}>
          <Left>
            <Rating
              type="star"
              startingValue={5}
              ratingCount={5}
              imageSize={13}
            />
          </Left>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 10,
  },
  brand: {
    position: 'absolute',
    width: 'auto',
    height: 51,
    left: 20,
    top: 32,
  },
  searchBar: {
    backgroundColor: '#E5E6EE',
    borderRadius: 15,
    position: 'absolute',
    width: 'auto',
    height: 35,
    left: 140,
    right: 29,
    top: 28,
  },
  headerText: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 18,
    color: '#303031',
  },
  genreContainer: {
    marginTop: -550,
    marginBottom: 20,
    marginHorizontal: 29,
  },
  popularContainer: {
    marginHorizontal: 29,
  },
  popular: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 23,
    color: '#303031',
  },
  bookContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
    // paddingRight: 20,
  },
  cardBook: {
    marginRight: 28,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowColor: '#2c2c2c',
    shadowOffset: {height: 0, width: 4},
  },
  cardBookImage: {
    width: 145,
    height: 180,
    borderRadius: 5,
  },
  rating: {
    marginTop: -15,
  },
});
