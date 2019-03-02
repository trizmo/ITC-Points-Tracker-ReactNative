import React, { Component } from 'react'

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export default class AppProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playerOne: {
        name: "",
        points: undefined,
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
        points: undefined,
        firstSecondary: "",
        secondSecondary: "",
        thirdSecondary: "",
      }
    }

  }

  setCheck = (value) => {
    let playerOne = { ...this.state.playerOne } 
    let newValue = "";

    switch(value) {
      
      case "Kill 1":
      playerOne = { ...this.state.playerOne } 
      newValue = !playerOne.roundOne_killOne
      playerOne.roundOne_killOne = newValue
      this.setState({
        playerOne
      }, (console.log(this.state.playerOne))
      )
      break;

      case "Hold One":
      console.log("button works")
      playerOne = { ...this.state.playerOne }
      newValue = !playerOne.roundOne_holdOne
      console.log("old value: " + newValue)
      playerOne.roundOne_holdOne = newValue
      console.log("new value: " + newValue)
      this.setState({
        playerOne
      }, (console.log(this.state.playerOne))
      )
      break;

      case "Hold More":
      console.log("button works")
      playerOne = { ...this.state.playerOne } 
      newValue = !playerOne.roundOne_holdMore
      console.log("old value: " + newValue)
      playerOne.roundOne_holdMore = newValue
      console.log("new value: " + newValue)
      this.setState({
        playerOne
      }, (console.log(this.state.playerOne))
      )
      break;

      case "Kill More":
      console.log("button works")
      playerOne = { ...this.state.playerOne } 
      newValue = !playerOne.roundOne_killMore
      console.log("old value: " + newValue)
      playerOne.roundOne_killMore = newValue
      console.log("new value: " + newValue)
      this.setState({
        playerOne
      }, (console.log(this.state.playerOne))
      )
      break;

      case "Bonus Objectives":
      console.log("button works")
      playerOne = { ...this.state.playerOne } 
      newValue = !playerOne.roundOne_bonusObjective
      console.log("old value: " + newValue)
      playerOne.roundOne_bonusObjective = newValue
      console.log("new value: " + newValue)
      this.setState({
        playerOne
      }, (console.log(this.state.playerOne))
      )
      break;

      default:
        console.log("no check")
        
    }
  }

  setSecondaries = (setUp) => {
    let state = { ...this.state };
    state = setUp;
    this.setState({ state });
  };

  incrementScore = () => {
    let playerOne = { ...this.state.playerOne }
    state.playerOne.points = state.playerOne.points + 1
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
        setCheck: this.setCheck
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }


}