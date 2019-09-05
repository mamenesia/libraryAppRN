import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  Container,
  Item,
  Input,
  Icon,
  Title,
  Body,
  Card,
  CardItem,
  Left,
} from 'native-base';

class GenreCard extends Component {
  render() {
    return (
      <Container>
        <Card style={styles.cardGenre}>
          <CardItem cardBody>
            <Body style={styles.genreTitle}>
              <Text style={styles.genreTitleText}>{this.props.genre}</Text>
            </Body>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

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

export default GenreCard;
