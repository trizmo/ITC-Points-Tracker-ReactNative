import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import ScoreBoard from '../components/ScoreBoard'
import { AppConsumer } from '../storage/AppContext'


export default class RoundOneScreen extends Component {

  static navigationOptions = {
    title: 'ROUND ONE',
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
      <AppConsumer>
        {(context) => {
          <Container>
            <Content>

              <Grid>
                <Row>
                  <ScoreBoard />
                </Row>
                {/* <Row>
                  <Button
                    onPress={() => { context.incrementScore() }}
                    >
                    <Text>
                      increment p1 score
                    </Text>
                  </Button>

                </Row> */}
              </Grid>
            </Content>
          </Container>
        }}
      </AppConsumer>
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
