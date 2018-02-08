import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle, {  MyEventComponent, MyToggleWrapper } from "./components/Toggle";
import Switch from "./components/Switch";
import MyToggle from "./components/MyToggle";


function App() {
  return (
    <Toggle
      onToggle={on => console.log('toggle', on)}
      render={({on, toggle}) => (
        <div>
          {on
            ? 'The button is on'
            : 'The button is off'}
          <Switch on={on} onClick={toggle} />
          <hr />
          <MyToggle on={on} toggle={toggle} />
        </div>
      )}
    />
  )
}


export default App;
