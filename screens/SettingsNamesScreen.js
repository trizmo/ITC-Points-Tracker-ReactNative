import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Form, Item, Input, Button, Picker, Label } from 'native-base';

import Nextbutton from '../components/NextButton'

// context
import { AppConsumer } from '../storage/AppContext'


export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: {
        name: "",

      },

      playerTwo: {
        name: "",

      }

    }
  }

  static navigationOptions = {
    title: 'Enter Player Names',
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
              <Form style={styles.form}>

                <Item floatingLabel>
                <Label>PLAYER ONE</Label>
                  <Input
                    value={this.state.playerOne.name}
                    onChangeText={(text) => {
                      const playerOne = { ...this.state.playerOne };
                      playerOne.name = text
                      this.setState({ playerOne })
                    }}
                  />
                </Item>

                <Item floatingLabel>
                <Label>PLAYER TWO</Label>
                  <Input
                    value={this.state.playerTwo.name}
                    onChangeText={(text) => {
                      const playerTwo = { ...this.state.playerTwo };
                      playerTwo.name = text
                      this.setState({ playerTwo })
                    }}
                  />
                </Item>

                  <Nextbutton 
                  style={{alignSelf: "flex-end"}}
                  path={"SettingsSecondaries"} />

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
  form: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  }
});

