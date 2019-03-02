import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Button, Text, ListItem, CheckBox, Body } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

// components
import ScoreBoard from '../components/ScoreBoard'

// context
import { AppConsumer } from '../storage/AppContext'

export default class RoundOneScreen extends Component {

  static navigationOptions = {
    title: 'Player One: ROUND ONE',
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
        <ScoreBoard />
        <AppConsumer>
          {(context) => (
            <Content>

              <ListItem>
                <CheckBox
                  checked={context.state.playerOne.roundOne_killOne}
                  onPress={() => {
                    context.setCheck("Kill 1")
                  }}
                />
                <Body>
                  <Text>Kill 1</Text>
                </Body>
              </ListItem>

              <ListItem>
                <CheckBox
                  checked={context.state.playerOne.roundOne_holdOne}
                  onPress={() => {
                    context.setCheck("Hold One")
                  }}
                />
                <Body>
                  <Text>Hold One</Text>
                </Body>
              </ListItem>

              <ListItem>
                <CheckBox
                  checked={context.state.playerOne.roundOne_holdMore}
                  onPress={() => {
                    context.setCheck("Hold More")
                  }}
                />
                <Body>
                  <Text>Hold More</Text>
                </Body>
              </ListItem>

              <ListItem>
                <CheckBox
                  checked={context.state.playerOne.roundOne_killMore}
                  onPress={() => {
                    context.setCheck("Kill More")
                  }}
                />
                <Body>
                  <Text>Kill More</Text>
                </Body>
              </ListItem>

              <ListItem>
                <CheckBox
                  checked={context.state.playerOne.roundOne_bonusObjective}
                  onPress={() => {
                    context.setCheck("Bonus Objectives")
                  }}
                />
                <Body>
                  <Text>Bonus Objectives</Text>
                </Body>
              </ListItem>

            </Content>
          )}
        </AppConsumer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
