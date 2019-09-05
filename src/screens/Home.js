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
import {Rating} from 'react-native-ratings';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const backgroundColors = [
      {backgroundColor: '#9AF833'},
      {backgroundColor: '#9A2B6B', backgroundColor},
    ];
    return (
      <View>
        <Container style={styles.container}>
          <Body style={styles.brand}>
            <Title style={styles.headerText}>Library App</Title>
          </Body>
          <Item rounded transparent style={styles.searchBar}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <ScrollView
            horizontal={true}
            style={styles.genreContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <Card style={styles.cardGenre}>
              <CardItem cardBody>
                <Body style={styles.genreTitle}>
                  <Text style={styles.genreTitleText}>Novel</Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={styles.cardGenre}>
              <CardItem cardBody>
                <Body style={styles.genreTitle}>
                  <Text style={styles.genreTitleText}>Action</Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={styles.cardGenre}>
              <CardItem cardBody>
                <Body style={styles.genreTitle}>
                  <Text style={styles.genreTitleText}>Romance</Text>
                </Body>
              </CardItem>
            </Card>
          </ScrollView>
        </Container>
        <View style={styles.popularContainer}>
          <Text style={styles.popular}>Popular Books</Text>
          <View style={styles.bookContainer}>
            <Card>
              <CardItem cardBody>
                <Image
                  style={styles.cardBookImage}
                  source={{
                    uri:
                      'https://images-na.ssl-images-amazon.com/images/I/51X1itcOPNL._SX332_BO1,204,203,200_.jpg',
                  }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Text>The Beekeeper</Text>
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
            <Card>
              <CardItem cardBody>
                <Image
                  style={styles.cardBookImage}
                  source={{
                    uri:
                      'https://images-na.ssl-images-amazon.com/images/I/81c3IwhrRtL.__BG0,0,0,0_FMpng_AC_UL270_SR180,270_.jpg',
                  }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Drowning</Text>
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
          </View>
        </View>
      </View>
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
    position: 'absolute',
    left: 28,
    top: 97,
    right: 28,
  },
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
  popularContainer: {
    position: 'absolute',
    left: 29,
    right: 29,
    top: 270,
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
  cardBookImage: {
    width: 140,
    height: 180,
    borderRadius: 5,
  },
  rating: {
    marginTop: -15,
  },
});

export default Home;
