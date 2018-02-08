import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToggleProvider } from "./components/ToggleProvider";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

function App() {
  return (
    <ToggleProvider>
      <div>
        <Header />
        <Post />
      </div>
    </ToggleProvider>
  )
}
export default App;
