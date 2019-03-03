import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, Button, ListItem, CheckBox, Body } from 'native-base';
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
      <Grid>
        <Row size={15}>
        <ScoreBoard />
        </Row>
        <Row size={85}>
        <AppConsumer>
          {(context) => (
            <Content>
              <Text>{context.state.playerOne.name}</Text>
              <Text>==================</Text>
              <ListItem>
                <CheckBox
                  checked={context.state.playerOne.roundOne_killOne}
                  onPress={() => {
                    context.setCheck("Kill 1", "playerOne")
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
                    context.setCheck("Hold One", "playerOne")
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
                    context.setCheck("Hold More", "playerOne")
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
                    context.setCheck("Kill More", "playerOne")
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
                    context.setCheck("Bonus Objectives", "playerOne")
                  }}
                />
                <Body>
                  <Text>Bonus Objectives</Text>
                </Body>
              </ListItem>


              <Text>{context.state.playerTwo.name}</Text>
              <Text>==================</Text>
              <ListItem>
                <CheckBox
                  checked={context.state.playerTwo.roundOne_killOne}
                  onPress={() => {
                    context.setCheck("Kill 1", "playerTwo")
                  }}
                />
                <Body>
                  <Text>Kill 1</Text>
                </Body>
              </ListItem>

              <ListItem>
                <CheckBox
                  checked={context.state.playerTwo.roundOne_holdOne}
                  onPress={() => {
                    context.setCheck("Hold One", "playerTwo")
                  }}
                />
                <Body>
                  <Text>Hold One</Text>
                </Body>
              </ListItem>

              <ListItem>
                <CheckBox
                  checked={context.state.playerTwo.roundOne_holdMore}
                  onPress={() => {
                    context.setCheck("Hold More", "playerTwo")
                  }}
                />
                <Body>
                  <Text>Hold More</Text>
                </Body>
              </ListItem>

              <ListItem>
                <CheckBox
                  checked={context.state.playerTwo.roundOne_killMore}
                  onPress={() => {
                    context.setCheck("Kill More", "playerTwo")
                  }}
                />
                <Body>
                  <Text>Kill More</Text>
                </Body>
              </ListItem>

              <ListItem>
                <CheckBox
                  checked={context.state.playerTwo.roundOne_bonusObjective}
                  onPress={() => {
                    context.setCheck("Bonus Objectives", "playerTwo")
                  }}
                />
                <Body>
                  <Text>Bonus Objectives</Text>
                </Body>
              </ListItem>
            </Content>
          )}
        </AppConsumer>

        </Row>
      </Grid>


        
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
