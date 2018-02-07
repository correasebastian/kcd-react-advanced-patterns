import React, { Component } from 'react';
import Switch from "./Switch";
import { object } from "prop-types";


const TOGGLE_CONTEXT = '__toggle__'


export function withToggle(Component) {
  function Wrapper(props, context) {
    const toggleContext = context[TOGGLE_CONTEXT]
    return (
      <Component
        {...props}
        toggle={toggleContext}
      />
    )
  }
  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: object.isRequired,
  }
  Wrapper.displayName = `withToggle(${Component.displayName ||
    Component.name})`
  return Wrapper
}


  const MyToggle = ({toggle: {on, toggle}}) => (
    <button onClick={toggle}>
      {on ? 'on' : 'off'}
    </button>
  )
  
  export const MyToggleWrapper = withToggle(MyToggle)

  export const MyEventComponent = withToggle(
    function MyEventComponent({toggle, on, event}) {
      const props = {[event]: on}
      return toggle.on ? (
        <button {...props}>
          The {event} event
        </button>
      ) : null
    },
  )
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

export default class Toggle extends Component {
  static On = withToggle(ToggleOn)
  static Off = withToggle(ToggleOff)
  static Button = withToggle(ToggleButton)

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