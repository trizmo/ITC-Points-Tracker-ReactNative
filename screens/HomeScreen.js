import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Container, Text, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

// context
import { AppConsumer } from '../storage/AppContext';

const { height, width } = Dimensions.get("window")
const windowWidth = width
const windowHeight = height

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  }

  // async/await issue for default font for native-base
  // see if possible to switch to a standard font to get rid of async/await issue
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      // 'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({ fontLoaded: true })
  }

  static navigationOptions = {
    title: 'ITC Points Tracker v1',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#1e8fb5',
      borderBottomColor: '#ffffff',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 23,
    },
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (

      <Container style={styles.container}>
        {this.state.fontLoaded ? (
          <Button
            info
            large
            rounded
            style={{alignSelf: "center"}}
            onPress={() => { this.props.navigation.navigate("PlayerNames") }}
          >
            <Text>Start</Text>
          </Button>
        ) : <Text>LOADING</Text>}
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});