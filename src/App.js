import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from "./components/Toggle";

function App() {
  return (
    <Toggle onToggle={on => console.log('toggle', on)} />
  )
}


export default App;
