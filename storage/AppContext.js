import React, { Component } from 'react'

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export default class AppProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playerOne: {
        name: "",
        points: 0,
        firstSecondary: "",
        secondSecondary: "",
        thirdSecondary: "",
      },
      playerTwo: {
        name: "",
        points: 0,
        firstSecondary: "",
        secondSecondary: "",
        thirdSecondary: "",
      }
    }

  }


  setSecondaries = (setUp) => {
    let state = { ...this.state };
    state = setUp;
    this.setState({ state });
  };

  incrementScore() {
    let state = {...this.state}
    state.playerOne.points++
    this.setState({
      state
    })
  }


  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        setSecondaries: this.setSecondaries,
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }


}