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
      render={({on, toggle, getTogglerProps}) => (
        <div>
          <Switch
            on={on}
            {...getTogglerProps()}
          />
          <hr />
          <button
            {...getTogglerProps({
              onClick: () => alert('hi'),
              id: 'hi',
            })}
          >
            {on ? 'on' : 'off'}
          </button>
        </div>
      )}
    />
  )
}

export default App;
