import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
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

import GenreCard from '../components/GenreCard';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container style={styles.container}>
            <Body style={styles.brand}>
              <Title style={styles.headerText}>Library App</Title>
            </Body>
            <Item rounded style={styles.searchBar}>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
            </Item>
          </Container>
          <ScrollView
            horizontal={true}
            style={styles.genreContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <TouchableOpacity>
              <GenreCard name="Novel" />
            </TouchableOpacity>
            <TouchableOpacity>
              <GenreCard name="Action" />
            </TouchableOpacity>
            <TouchableOpacity>
              <GenreCard name="Biography" />
            </TouchableOpacity>
            <TouchableOpacity>
              <GenreCard name="Motivation" />
            </TouchableOpacity>
          </ScrollView>
          <Container style={styles.popularContainer}>
            <Text style={styles.popular}>Popular Books</Text>
            <View style={{flex: 1, height: 250}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <TouchableOpacity>
                  <Card style={styles.cardBook}>
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
                </TouchableOpacity>
                <TouchableOpacity>
                  <Card style={styles.cardBook}>
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
                </TouchableOpacity>
                <TouchableOpacity>
                  <Card style={styles.cardBook}>
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
                </TouchableOpacity>
                <TouchableOpacity>
                  <Card style={styles.cardBook}>
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
                </TouchableOpacity>
                <TouchableOpacity>
                  <Card style={styles.cardBook}>
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
                </TouchableOpacity>
              </ScrollView>
            </View>
          </Container>
        </ScrollView>
      </SafeAreaView>
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

export default Home;
