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
  Button,
  Item,
  Input,
  Icon,
  Title,
  Form,
  Body,
  Card,
  CardItem,
} from 'native-base';

import {connect} from 'react-redux';
import {getBooks} from '../public/actions/books';
import {getGenres} from '../public/actions/genres';

import GenreCard from '../components/GenreCard';
import BookCard from '../components/BookCard';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      genres: [],
      search: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = async () => {
    await this.props.dispatch(
      getBooks(null, 1, 'released_at', 'DESC', null, null),
    );
    this.setState({books: this.props.books.bookList});
    await this.props.dispatch(getGenres());
    this.setState({genres: this.props.genres.genreList});
  };

  handleSearch = e => {
    this.setState({search: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault;
    this.props.navitagion.navigate('Search', {search: this.state.search});
  };
  render() {
    const {books, genres} = this.state;
    const colors = [
      '#28BFDB',
      '#9AF833',
      '#9A2B6B',
      '#5B8B89',
      '#3DF504',
      '#5E21BF',
      '#D91780',
      '#0B0870',
      '#09F89A',
    ];
    const icons = [
      'http://www.htyweb.org/wp-content/uploads/2016/07/education-icon.png',
      'https://cdn1.iconfinder.com/data/icons/inficons-set-4/1000/diary-512.png',
      'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/110-512.png',
      'https://cdn1.iconfinder.com/data/icons/business-productivity-set-2/100/candidate_biography_cv_job_recruitment_hr-512.png',
      'https://static.thenounproject.com/png/11573-200.png',
      'https://www.pinclipart.com/picdir/middle/361-3610055_technology-icon-logo-icon-information-technology-clipart.png',
      'https://cdn3.iconfinder.com/data/icons/business-motivation-skills-2/96/Untitled-1_solution_provider-512.png',
      'https://cdn2.iconfinder.com/data/icons/flat-business-icon/600/shares-company-finance-512.png',
    ];
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container style={styles.container}>
            <Body style={styles.brand}>
              <Title style={styles.headerText}>Library App</Title>
            </Body>
            <Form onSubmit={() => this.handleSubmit}>
              <Item rounded style={styles.searchBar}>
                <Button transparent onPress={() => this.handleSubmit}>
                  <Icon name="ios-search" />
                </Button>
                <Input
                  placeholder="Search"
                  onChangeText={() => this.handleSearch}
                />
              </Item>
            </Form>
          </Container>
          <ScrollView
            horizontal={true}
            style={styles.genreContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            {genres ? (
              genres.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      this.props.navigation.navigate('Genre', {
                        genre: item.genre,
                      })
                    }>
                    <GenreCard
                      name={item.genre}
                      color={colors[index]}
                      iconUrl={icons[index]}
                    />
                  </TouchableOpacity>
                );
              })
            ) : (
              <Text>Loading...</Text>
            )}
          </ScrollView>
          <Container style={styles.sectionContainer}>
            <Text style={styles.sectionText}>Popular Books</Text>
            <View>
              <Card>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_2k4GSxqQCVA1qpyhaC7AFwBf1NlsyM6S2d-wQYcvs-H1zT6DQ',
                    }}
                    style={{
                      borderRadius: 10,
                      height: 200,
                      width: null,
                      flex: 1,
                    }}
                  />
                </CardItem>
              </Card>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              {books ? (
                books
                  .filter(book => book.status == 'Not Available')
                  .map((item, index) => {
                    return (
                      <TouchableOpacity
                        ke={index}
                        onPress={() =>
                          this.props.navigation.navigate('Detail', {
                            book_id: item.book_id,
                          })
                        }>
                        <BookCard
                          title={item.title}
                          imageUri={item.image_url}
                        />
                      </TouchableOpacity>
                    );
                  })
              ) : (
                <Text>Loading...</Text>
              )}
            </ScrollView>
          </Container>
          <Container
            style={[styles.sectionContainer, {marginTop: -150, height: 300}]}>
            <Text style={styles.sectionText}>New Release</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              {books ? (
                books.slice(0, 6).map((item, index) => {
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
                })
              ) : (
                <Text>Loading...</Text>
              )}
            </ScrollView>
          </Container>
          <Container
            style={[styles.sectionContainer, {marginTop: 20, height: 300}]}>
            <Text style={styles.sectionText}>Available Book</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              {books ? (
                books
                  .filter(book => book.status == 'Available')
                  .slice(0, 6)
                  .map((item, index) => {
                    return (
                      <TouchableOpacity
                        ke={index}
                        onPress={() =>
                          this.props.navigation.navigate('Detail', {
                            book_id: item.book_id,
                          })
                        }>
                        <BookCard
                          title={item.title}
                          imageUri={item.image_url}
                        />
                      </TouchableOpacity>
                    );
                  })
              ) : (
                <Text>Loading...</Text>
              )}
            </ScrollView>
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

const mapStateToProps = state => {
  return {books: state.books, genres: state.genres};
};

export default connect(mapStateToProps)(Home);
