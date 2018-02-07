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
    return Wrapper
  }
 export const MyToggle = withToggle(({ toggle:{toggle, on}}) => (
    <button onClick={toggle}>
      {on ? 'on' : 'off'}
    </button>
  ))

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

  const ToggleOn = withToggle(
    ({children, toggle: {on}}) => {
      return on ? children : null
    },
  )
  const ToggleOff = withToggle(
    ({children, toggle: {on}}) => {
      return on ? null : children
    },
  )
  const ToggleButton = withToggle(
    ({toggle: {on, toggle}, ...props}) => {
      return (
        <Switch
          on={on}
          onClick={toggle}
          {...props}
        />
      )
    },
  )

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