import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle, {  MyEventComponent, MyToggleWrapper } from "./components/Toggle";
import Switch from "./components/Switch";
import MyToggle from "./components/MyToggle";


function App() {
  return (
    <Toggle
      defaultOn={true}
      onToggle={on => console.log('toggle', on)}
      onReset={on => console.log('reset', on)}
      render={toggle => (
        <div>
          <Switch
            {...toggle.getTogglerProps({
              on: toggle.on,
            })}
          />
          <hr />
          <button onClick={() => toggle.reset()}>
            Reset
          </button>
        </div>
      )}
    />
  )
}

export default App;
