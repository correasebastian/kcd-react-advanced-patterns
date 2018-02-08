import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle, {  MyEventComponent, MyToggleWrapper } from "./components/Toggle";

function App() {
  return (
    <Toggle onToggle={on => console.log('toggle', on)} >
      <Toggle.On>The button is on</Toggle.On>
      <div> 
        <Toggle.Off>The button is off</Toggle.Off>
        <Toggle.Button/>
      </div>
      <MyToggleWrapper>
        </MyToggleWrapper>
        <MyToggleWrapper.ToggleMessage />
        <hr/>
        <MyEventComponent
        event="onClick"
        on={e => alert(e.type)}
      />
    </Toggle>
  )
}


export default App;
