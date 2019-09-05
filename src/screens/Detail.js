import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  Text as NbText,
} from 'native-base';

class Detail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <Image
          style={styles.imageHeader}
          source={{
            uri:
              'https://images-na.ssl-images-amazon.com/images/I/51X1itcOPNL._SX332_BO1,204,203,200_.jpg',
          }}
        />
        <Header span transparent style={styles.header}>
          <Left style={styles.backButton}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={styles.headerText}>
            <Title style={styles.headerTitle}>The Promises</Title>
            <Text style={styles.headerDate}>02-20-2020</Text>
          </Body>
        </Header>
        <View style={styles.cardBook}>
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
          </Card>
        </View>

        <View style={styles.detail}>
          <View>
            <Text style={styles.detailText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              nobis dolore obcaecati. Repudiandae quis autem consectetur quos
              expedita voluptas veritatis similique iste, illo rem
              necessitatibus tempora temporibus nam nulla ducimus numquam amet.
              Suscipit vel quod veniam molestias natus! Ducimus, fuga. Aliquid
              molestias placeat sit optio ad nisi recusandae quis ipsa!
            </Text>
            <View>
              <Button style={styles.actionButton}>
                <Text style={styles.actionButtonText}> Borrow </Text>
              </Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imageHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 280,
    borderRadius: 10,
    opacity: 0.7,
    backgroundColor: 'black',
  },
  header: {position: 'relative'},
  backButton: {
    position: 'absolute',
    left: 19,
    top: 30,
  },
  headerText: {
    position: 'absolute',
    width: 197,
    height: 44,
    left: 29,
    top: 230,
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
    position: 'absolute',
    width: 'auto',
    left: 29,
    right: 29,
    top: 350,
  },
  detailText: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify',
    color: '#303031',
  },
  actionButton: {
    width: 164,
    height: 39,
    backgroundColor: '#F4CF5D',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 20,
    marginTop: 36,
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

export default Detail;
