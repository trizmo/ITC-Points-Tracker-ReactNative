import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Container, Item, Input, Label } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid'

import Nextbutton from '../../components/NextButton'

// context
import { AppConsumer } from '../../storage/AppContext'

const { height, width } = Dimensions.get("window")

export default class PlayerNames extends Component {
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

  handleContextFunc = (func) => {
    console.log(func)
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

              <Row size={7} style={styles.buttons}>

                <Nextbutton
                style={styles.buttonItem}
                  press={() => context.setNameP1(this.state)}
                  path={"PlayerOneSecondaries"} />
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
    justifyContent: "center",
  },
  buttonItem: {
    width: width / 2.2,
    display: "flex",
    justifyContent: "center"
  },
  form: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  formItem: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
  },
});

