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
    let playerData = { ...this.state[player] } 
    let newValue = "";
    console.log(value, player)

    switch(value) {
      
      case "Kill 1":
      newValue = ![player].roundOne_killOne
      playerData.roundOne_killOne = newValue
      console.log(newValue)
      this.setState({
        playerData
      }, ()=> (console.log(this.state.playOne.roundOne_killOne)))
      break;

      case "Hold One":
      newValue = ![player].roundOne_holdOne
      playerData.roundOne_holdOne = newValue
      this.setState({
        playerData
      })
      break;

      case "Hold More":
      newValue = ![player].roundOne_holdMore
      playerData.roundOne_holdMore = newValue
      this.setState({
        playerData
      })
      break;

      case "Kill More":
      newValue = ![player].roundOne_killMore
      playerData.roundOne_killMore = newValue
      this.setState({
        playerData
      })
      break;

      case "Bonus Objectives":
      newValue = ![player].roundOne_bonusObjective
      playerData.roundOne_bonusObjective = newValue
      this.setState({
        playerData
      })
      break;

      default:
        console.log("no check")
        
    }
  }

  setSecondaries = (data) => {
    // console.log(data)
    const playerOne = { ...this.state.playerOne}
    playerOne.name = data.playerOne.name
    playerOne.firstSecondary = data.playerOne.firstSecondary
    playerOne.secondSecondary = data.playerOne.secondSecondary
    playerOne.thirdSecondary = data.playerOne.thirdSecondary

    const playerTwo = { ...this.state.playerTwo}
    playerTwo.name = data.playerTwo.name
    playerTwo.firstSecondary = data.playerTwo.firstSecondary
    playerTwo.secondSecondary = data.playerTwo.secondSecondary
    playerTwo.thirdSecondary = data.playerTwo.thirdSecondary

    this.setState({playerOne}, () => {
      console.log("===== Player One")
      console.log(this.state.playerOne)
      console.log("=====")
    })
    this.setState({playerTwo}, () => {
      console.log("===== Player Two")
      console.log(this.state.playerTwo)
      console.log("=====")
    })

    

    // let currentSecondary = { ...this.state.playerOne[secondary] };
    // currentSecondary = value
    // this.setState({ currentSecondary }, (console.log(this.state)));

  };

  incrementScore = () => {
    let playerOne = { ...this.state.playerOne }
    state.playerOne.points = state.playerOne.points + 1
    this.setState({
      playerOne
    })
  }

  setNameP1 = (name) => {
    let playerOne = { ...this.state.playerOne }
    playerOne.name = name
    this.setState({
      playerOne
    })
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