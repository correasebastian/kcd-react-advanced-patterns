import React, { Component } from 'react';
import Switch from "./Switch";
import { object } from "prop-types";


const TOGGLE_CONTEXT = '__toggle__'

function withToggle(Component) {
    function Wrapper(props, context) {
      const toggleContext = context[TOGGLE_CONTEXT]
      return (
        <Component {...toggleContext} {...props} />
      )
    }
    Wrapper.contextTypes = {
      [TOGGLE_CONTEXT]: object.isRequired,
    }
    return Wrapper
  }
  
 export const MyToggle = withToggle(({on, toggle}) => (
    <button onClick={toggle}>
      {on ? 'on' : 'off'}
    </button>
  ))

const ToggleOn = withToggle(({children, on}) => {
    return on ? children : null
  })
  const ToggleOff = withToggle(({children, on}) => {
    return on ? null : children
  })
  const ToggleButton = withToggle(
    ({on, toggle, ...props}) => {
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