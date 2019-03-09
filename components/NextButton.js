import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class NextButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      // 'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <View>
      {this.state.fontLoaded ? (
        <Button 
          small
          info
          rounded
          style={this.props.style}
          onPress={() => { this.props.loadUnits, this.props.navigation.navigate(this.props.path) }}
          press={() => this.props.press}
        >
          <Text>Next</Text>
        </Button>
      ):<Text>"LOADING..."</Text>}
    </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default withNavigation(NextButton);