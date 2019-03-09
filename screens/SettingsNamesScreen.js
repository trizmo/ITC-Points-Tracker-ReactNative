import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Container, Content, Form, Item, Input, Button, Picker, Label } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid'

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
            <Grid>
              <Row size={60} style={styles.form}>
                <Item
                  style={styles.formItem}
                  floatingLabel
                >
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

                <Item
                  style={styles.formItem}
                  floatingLabel
                >
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
              </Row>

              <Row size={7} style={styles.nextButton}>
                <View>
                  <Nextbutton
                    path={"SettingsSecondaries"} />
                </View>
              </Row>


            </Grid>
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
    flexDirection: "column",
    // flexWrap: "wrap",
    justifyContent: "center",
  },
  formItem: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  nextButton: {
    display: "flex",
    // flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    // alignItems: "stretch",
  },
});

