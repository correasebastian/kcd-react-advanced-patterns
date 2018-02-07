import React, { Component } from 'react';
import Switch from "./Switch";
import { object } from "prop-types";


const TOGGLE_CONTEXT = '__toggle__'
function ToggleOn({children}, context) {
    const {on} = context[TOGGLE_CONTEXT]
    return on ? children : null
  }
  ToggleOn.contextTypes = {
    [TOGGLE_CONTEXT]: object.isRequired,
  }

  function ToggleOff({children}, context) {
    const {on} = context[TOGGLE_CONTEXT]
    return on ? null : children
  }
  ToggleOff.contextTypes = {
    [TOGGLE_CONTEXT]: object.isRequired,
  }
  
  function ToggleButton(props, context) {
    const {on, toggle} = context[TOGGLE_CONTEXT]
    return (
      <Switch on={on} onClick={toggle} {...props} />
    )
  }
  ToggleButton.contextTypes = {
    [TOGGLE_CONTEXT]: object.isRequired,
  }

export default class Toggle extends Component {
    static On = ToggleOn
    static Off = ToggleOff
    static Button = ToggleButton

    static defaultProps = {onToggle: () => {}}

    static childContextTypes = {
        [TOGGLE_CONTEXT]: object.isRequired,
      }

    state = {on: false}

    toggle = () =>
      this.setState(
        ({on}) => ({on: !on}),
        () => {
          this.props.onToggle(this.state.on)
        },
      )

    getChildContext() {
        return {
          [TOGGLE_CONTEXT]: {
            on: this.state.on,
            toggle: this.toggle,
          },
        }
      }

    render() {
        return <div>{this.props.children}</div>
    }
  }