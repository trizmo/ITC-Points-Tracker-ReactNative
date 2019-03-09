import React, { Component } from 'react'

import SecondariesData from '../utils/data/secondaries.json';

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export default class AppProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {

      Secondaries: SecondariesData,

      playerOne: {
        name: "",
        points: 0,
        firstSecondary: "",
        secondSecondary: "",
        thirdSecondary: "",
        roundOne_killOne: false,
        roundOne_holdOne: false,
        roundOne_holdMore: false,
        roundOne_killMore: false,
        roundOne_bonusObjective: false,
      },

      playerTwo: {
        name: "",
        points: 0,
        firstSecondary: "",
        secondSecondary: "",
        thirdSecondary: "",
        roundOne_killOne: false,
        roundOne_holdOne: false,
        roundOne_holdMore: false,
        roundOne_killMore: false,
        roundOne_bonusObjective: false,
      }
    }
  }

  setCheck = (value, player) => {
    let stateObject = { ...this.state }
    let newValue = "";
    console.log(value, player)

    switch (value) {

      case "Kill 1":
        newValue = !stateObject[player].roundOne_killOne
        stateObject[player].roundOne_killOne = newValue
        this.setState(stateObject)
        break;

      case "Hold One":
        newValue = !stateObject[player].roundOne_holdOne
        stateObject[player].roundOne_holdOne = newValue
        this.setState(stateObject)
        break;

      case "Hold More":
        newValue = !stateObject[player].roundOne_holdMore
        stateObject[player].roundOne_holdMore = newValue
        this.setState(stateObject)
        break;

      case "Kill More":
        newValue = !stateObject[player].roundOne_killMore
        stateObject[player].roundOne_killMore = newValue
        this.setState(stateObject)
        break;

      case "Bonus Objectives":
        newValue = !stateObject[player].roundOne_bonusObjective
        stateObject[player].roundOne_bonusObjective = newValue
        this.setState(stateObject)
        break;

      default:
        console.log("no check")
    }
  }

  setSecondaries = (data) => {
    // console.log(data)
    const playerOne = { ...this.state.playerOne }
    playerOne.name = data.playerOne.name
    playerOne.firstSecondary = data.playerOne.firstSecondary
    playerOne.secondSecondary = data.playerOne.secondSecondary
    playerOne.thirdSecondary = data.playerOne.thirdSecondary

    const playerTwo = { ...this.state.playerTwo }
    playerTwo.name = data.playerTwo.name
    playerTwo.firstSecondary = data.playerTwo.firstSecondary
    playerTwo.secondSecondary = data.playerTwo.secondSecondary
    playerTwo.thirdSecondary = data.playerTwo.thirdSecondary

    this.setState({ playerOne }, () => {
      console.log("===== Player One")
      console.log(this.state.playerOne)
      console.log("=====")
    })
    this.setState({ playerTwo }, () => {
      console.log("===== Player Two")
      console.log(this.state.playerTwo)
      console.log("=====")
    })
  };

  incrementScore = () => {
    let playerOne = { ...this.state.playerOne }
    state.playerOne.points = state.playerOne.points + 1
    this.setState({
      playerOne
    })
  }

  setNameP1 = (data) => {
    // console.log(data)
    let playerOne = { ...this.state.playerOne }
    playerOne.name = data.playerOne.name

    let playerTwo = { ...this.state.playerTwo }
    playerTwo.name = data.playerTwo.name

    this.setState(
      {
        playerOne: playerOne,
        playerTwo: playerTwo
      },
      () => console.log(this.state)
    )
  }

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        setSecondaries: this.setSecondaries,
        incrementScore: this.incrementScore,
        set_roundOne_killOne: this.set_roundOne_killOne,
        setCheck: this.setCheck,
        setNameP1: this.setNameP1
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}