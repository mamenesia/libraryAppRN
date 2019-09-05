import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Body, Card, CardItem} from 'native-base';

class GenreCard extends Component {
  render() {
    return (
      <Card transparent style={styles.cardGenre}>
        <CardItem cardBody>
          <Body style={styles.genreTitle}>
            <Text style={styles.genreTitleText}>{this.props.name}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default GenreCard;
const styles = StyleSheet.create({
  cardGenre: {
    position: 'relative',
    width: 250,
    height: 120,
    marginRight: 28,
    backgroundColor: '#28BFDB',
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowColor: '#2c2c2c',
    shadowOffset: {height: 0, width: 4},
  },
  genreTitle: {
    position: 'absolute',
    top: 45,
    left: 22,
    backgroundColor: 'transparent',
  },
  genreTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Airbnb Cereal App',
    lineHeight: 20,
  },
});
