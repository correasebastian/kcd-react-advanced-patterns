import React, { Component } from 'react';
import Switch from "./Switch";
import * as PropTypes from "prop-types";


const TOGGLE_CONTEXT = '__toggle__'

export function withToggle(Component) {
  function Wrapper(
    {innerRef, ...props},
    context,
  ) {
    const toggleContext = context[TOGGLE_CONTEXT]
    return (
      <Component {...props} ref={innerRef} toggle={toggleContext} />
    )
  }
  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  }
  Wrapper.displayName = `withToggle(${Component.displayName ||
    Component.name})`
  return Wrapper
}

const ToggleOn = ({children, toggle: {on}}) => {
  return on ? children : null
}
const ToggleOff = ({children, toggle: {on}}) => {
  return on ? null : children
}
const ToggleButton = ({
  toggle: {on, toggle},
  ...props
}) => {
  return (
    <Switch on={on} onClick={toggle} {...props} />
  )
}
export default class Toggle extends React.Component {
  static On = withToggle(ToggleOn)
  static Off = withToggle(ToggleOff)
  static Button = withToggle(ToggleButton)
  static defaultProps = {onToggle: () => {}}
  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  }

  state = {on: false}
  toggle = () =>
    this.setState(
      ({on}) => ({on: !on}),
      () => this.props.onToggle(this.state.on),
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


