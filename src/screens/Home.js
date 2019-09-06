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
} from 'native-base';
// import {Rating} from 'react-native-ratings';

import GenreCard from '../components/GenreCard';
import BookCard from '../components/BookCard';

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
          <Container style={styles.sectionContainer}>
            <Text style={styles.sectionText}>Popular Books</Text>
            <View>
              <Card>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PcRnQpvqW4NtOcaaR_R-lHFngIrR27o4e-o_6AlROkGR9W8kVA',
                    }}
                    style={{height: 200, width: null, flex: 1}}
                  />
                </CardItem>
              </Card>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
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
            </ScrollView>
          </Container>
          <Container style={styles.sectionContainer}>
            <Text style={styles.sectionText}>What's News ?</Text>
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
  sectionContainer: {
    marginHorizontal: 29,
  },
  sectionText: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 23,
    color: '#303031',
  },
});

export default Home;
