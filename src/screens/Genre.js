import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
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

class Genre extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Genre Book</Text>
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
