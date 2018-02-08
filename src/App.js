import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from "./components/Toggle";
import {MyToggleWrapper} from "./components/MyToggle";

function App() {
  return (
    <Toggle onToggle={on => on ? this.myToggle.focus() : null} >
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button/>
      <MyToggleWrapper innerRef={myToggle => (this.myToggle = myToggle)} />
    </Toggle>
  )
}


export default App;
