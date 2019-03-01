import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import { AppConsumer } from '../storage/AppContext';

export default class ScoreBoard extends Component {
  render() {
    return (

      <AppConsumer>
        {(context) => (
          <Container>
            <Grid>
              <Col>
                <Text>P1: {context.state.playerOne.points} </Text>
              </Col>
              <Col>
                <Text>P2: {context.state.playerTwo.points} </Text>
              </Col>
            </Grid>
          </Container>
        )}
      </AppConsumer>
    )
  }
}
