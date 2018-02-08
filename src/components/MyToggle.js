import React, { Component } from 'react';
import { withToggle } from "./Toggle";

class MyToggle extends React.Component {
    focus = () => this.button.focus()
    render() {
      const {toggle: {on, toggle}} = this.props
      return (
        <button onClick={toggle} ref={button => (this.button = button)} >
          {on ? 'on' : 'off'}
        </button>
      )
    }
  }
  
  export  const MyToggleWrapper = withToggle(MyToggle)