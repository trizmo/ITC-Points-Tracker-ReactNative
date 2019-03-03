import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Button } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import { AppConsumer } from '../storage/AppContext';

export default class ScoreBoard extends Component {

  render() {
    return (
      <AppConsumer>
        {(context) => (
          <Container>
            <Grid>
              <Row>

                <Col>
                  <Text style={styles.points}>P1: {context.state.playerOne.points} </Text>
                </Col>

                <Col>
                  <Text style={styles.points}>P2: {context.state.playerTwo.points} </Text>
                </Col>

              </Row>
            </Grid>
          </Container>
        )}
      </AppConsumer>
    )
  }
}

const styles = StyleSheet.create({
  points: {
    fontSize: 22,
    color: "black"
  }
})