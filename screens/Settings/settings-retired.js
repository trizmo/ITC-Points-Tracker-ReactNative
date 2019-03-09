import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container, Content, Form, Item, Input, Button, Picker } from 'native-base';

// data
// import SecondariesData from '../utils/data/secondaries.json';

// context
import { AppConsumer } from '../storage/AppContext'

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

      // Secondaries: SecondariesData,

      playerOne: {
        name: "",
        points: 0,
        firstSecondary: "",
        secondSecondary: "",
        thirdSecondary: "",
      },

      playerTwo: {
        name: "",
        points: 0,
        firstSecondary: "",
        secondSecondary: "",
        thirdSecondary: "",
      }

    }
  }

  onValueChangeP1FirstSecondary(value) {
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

  onValueChangeP2FirstSecondary(value) {
    const playerTwo = { ...this.state.playerTwo }
    playerTwo.firstSecondary = value
    this.setState({
      playerTwo
    })
  }

  onValueChangeP2SecondSecondary(value) {
    const playerTwo = { ...this.state.playerTwo }
    playerTwo.secondSecondary = value
    this.setState({
      playerTwo
    })
  }

  onValueChangeP2ThirdSecondary(value) {
    const playerTwo = { ...this.state.playerTwo }
    playerTwo.thirdSecondary = value
    this.setState({
      playerTwo
    })
  }


  static navigationOptions = {
    title: 'Settings',
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

            <Content>
              <Form>

                <Item floatingLabel>
                  <Input
                    placeholder="Player One Name"
                    value={this.state.playerOne.name}
                    onChangeText={(text) => {
                      const playerOne = { ...this.state.playerOne }
                      playerOne.name = text
                      this.setState({ playerOne })
                    }}
                  />
                </Item>



                <Item picker>
                  <Picker
                    mode="dropdown"
                    placeholder="First Secondary"
                    selectedValue={this.state.playerOne.firstSecondary}
                    onValueChange={this.onValueChangeP1FirstSecondary.bind(this)}
                  >

                    <Picker.Item label="Select First Secondary" value="" />

                    {this.state.Secondaries.map(secondary => (
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

                    {this.state.Secondaries.map(secondary => (
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

                    {this.state.Secondaries.map(secondary => (
                      <Picker.Item key={secondary.id} label={secondary.description} value={secondary.name} />
                    ))}

                  </Picker>
                </Item>


                <Item floatingLabel>
                  <Input
                    placeholder="Player Two Name"
                    value={this.state.playerTwo.name}
                    onChangeText={(text) => {
                      const playerTwo = { ...this.state.playerTwo };
                      playerTwo.name = text
                      this.setState({ playerTwo })
                    }}
                  />
                </Item>


                <Item picker>
                  <Picker
                    mode="dropdown"
                    placeholder="First Secondary"
                    selectedValue={this.state.playerTwo.firstSecondary}
                    onValueChange={this.onValueChangeP2FirstSecondary.bind(this)}
                  >
                    <Picker.Item label="Select First Secondary" value="" />

                    {this.state.Secondaries.map(secondary => (
                      <Picker.Item key={secondary.id} label={secondary.description} value={secondary.name} />
                    ))}

                  </Picker>
                </Item>

                <Item picker>
                  <Picker
                    mode="dropdown"
                    placeholder="Second Secondary"
                    selectedValue={this.state.playerTwo.secondSecondary}
                    onValueChange={this.onValueChangeP2SecondSecondary.bind(this)}
                  >
                    <Picker.Item label="Select Second Secondary" value="" />

                    {this.state.Secondaries.map(secondary => (
                      <Picker.Item key={secondary.id} label={secondary.description} value={secondary.name} />
                    ))}

                  </Picker>
                </Item>

                <Item picker>
                  <Picker
                    mode="dropdown"
                    placeholder="Third Secondary"
                    selectedValue={this.state.playerTwo.thirdSecondary}
                    onValueChange={this.onValueChangeP2ThirdSecondary.bind(this)}
                  >
                    <Picker.Item label="Select Third Secondary" value="" />

                    {this.state.Secondaries.map(secondary => (
                      <Picker.Item key={secondary.id} label={secondary.description} value={secondary.name} />
                    ))}

                  </Picker>
                </Item>

                <Button
                  style={styles.button}
                  primary
                  block
                  onPress={() => {
                    context.setSecondaries(this.state);
                    console.log(this.state);
                    this.props.navigation.navigate("RoundOne");
                  }}
                ><Text>Next</Text></Button>

              </Form>
            </Content>
          )}
        </AppConsumer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
  },
});
