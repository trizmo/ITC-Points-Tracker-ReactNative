import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Container, Item, Button, Picker, Text } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid'

import Nextbutton from '../../components/NextButton'

// context
import { AppConsumer } from '../../storage/AppContext'

const { width } = Dimensions.get("window")

export default class PlayerOneSecondaries extends Component {
  constructor(props) {
    super(props);
    this.state = {

      playerOne: {
        name: "",
        firstSecondary: "",
        secondSecondary: "",
        thirdSecondary: "",
      }
    }
  }

  onValueChangeP1FirstSecondary = (value) => {
    const playerOne = { ...this.state.playerOne }
    playerOne.firstSecondary = value
    this.setState({
      playerOne
    })
  }

  onValueChangeP1SecondSecondary(value) {
    const playerOne = { ...this.state.playerOne }
    playerOne.secondSecondary = value
    this.setState({
      playerOne
    })
  }

  onValueChangeP1ThirdSecondary(value) {
    const playerOne = { ...this.state.playerOne }
    playerOne.thirdSecondary = value
    this.setState({
      playerOne
    })
  }

  static navigationOptions = {
    title: 'Select Your Secondaires',
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
    return (
      <Container>
        <AppConsumer>
          {(context) => (
            <Grid>

              <Row size={10}>
                <Text style={styles.playerName}>{context.state.playerOne.name}</Text>
              </Row>

              <Row size={70}>
                <Container>

                  <Item picker>
                    <Picker
                      mode="dropdown"
                      placeholder="First Secondary"
                      selectedValue={this.state.playerOne.firstSecondary}
                      onValueChange={this.onValueChangeP1FirstSecondary.bind(this)}
                    >
                      <Picker.Item label="Select First Secondary" value="" />

                      {context.state.Secondaries.map(secondary => (
                        <Picker.Item key={secondary.id} label={secondary.description} value={secondary.name} />
                      ))}

                    </Picker>
                  </Item>

                  <Item picker>
                    <Picker
                      mode="dropdown"
                      placeholder="Second Secondary"
                      selectedValue={this.state.playerOne.secondSecondary}
                      onValueChange={this.onValueChangeP1SecondSecondary.bind(this)}
                    >
                      <Picker.Item label="Select Second Secondary" value="" />

                      {context.state.Secondaries.map(secondary => (
                        <Picker.Item key={secondary.id} label={secondary.description} value={secondary.name} />
                      ))}

                    </Picker>
                  </Item>

                  <Item picker>
                    <Picker
                      mode="dropdown"
                      placeholder="Third Secondary"
                      selectedValue={this.state.playerOne.thirdSecondary}
                      onValueChange={this.onValueChangeP1ThirdSecondary.bind(this)}
                    >
                      <Picker.Item label="Select Third Secondary" value="" />

                      {context.state.Secondaries.map(secondary => (
                        <Picker.Item key={secondary.id} label={secondary.description} value={secondary.name} />
                      ))}

                    </Picker>

                  </Item>
                </Container>
              </Row>


              <Row size={7.5} style={styles.buttons}>
                  <Button
                    style={styles.buttonItem}
                    info
                    small
                    rounded
                    // onPress={() => { context.setSecondaries(this.state) }}
                    >
                    <Text>set secondaries</Text>
                  </Button>

                  <Nextbutton
                    style={styles.buttonItem}
                    path={"PlayerTwoSecondaries"} />
              </Row>

            </Grid>
          )}
        </AppConsumer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  buttons: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  buttonItem: {
    width: width / 2.2,
    display: "flex",
    justifyContent: "center"
  },
});

