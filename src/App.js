import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle, {  MyEventComponent, MyToggleWrapper } from "./components/Toggle";
import Switch from "./components/Switch";
import MyToggle from "./components/MyToggle";


class App extends React.Component {
  initialState = {timesClicked: 0, on: false}
  state = this.initialState
  handleToggle = () => {
    this.setState(({timesClicked, on}) => ({
      timesClicked: timesClicked + 1,
      on: timesClicked >= 4 ? false : !on,
    }))
  }
  handleReset = () => {
    this.setState(this.initialState)
  }

  render() {
    const {timesClicked, on} = this.state
    return (
      <Toggle
        on={on}
        onToggle={this.handleToggle}
        onReset={this.handleReset}
        render={toggle => (
          <div>
            <Switch
              {...toggle.getTogglerProps({
                on: toggle.on,
              })}
            />
            {timesClicked > 4 ? (
              <div>
                Whoa, you've clicked too much!
                <br />
                <button onClick={toggle.reset}>
                  reset
                </button>
              </div>
            ) : timesClicked > 0 ? (
              <div>
                Click count: {timesClicked}
              </div>
            ) : null}
          </div>
        )}
      />
    )
  }
}

export default App;
