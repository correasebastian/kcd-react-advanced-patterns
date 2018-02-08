import React, {Component} from 'react';
import * as PropTypes from "prop-types";
import Toggle from "./Toggle";

export class ToggleProvider extends Component {
    static contextName = '__toggle__'
    static Renderer = class extends Component {
      static childContextTypes = {
        [ToggleProvider.contextName]: PropTypes.object.isRequired,
      }
      getChildContext() {
        return {
          [ToggleProvider.contextName]: this.props.toggle,
        }
      }
      render() {
        return this.props.children
      }
    }
    render() {
      const { children, ...remainingProps } = this.props
      return (
        <Toggle
          {...remainingProps}
          render={toggle => (
            <ToggleProvider.Renderer
              toggle={toggle}
              children={children}
            />
          )}
        />
      )
    }
  }
  
  export function ConnectedToggle(props, context) {
    return props.render(
      context[ToggleProvider.contextName],
    )
  }
  ConnectedToggle.contextTypes = {
    [ToggleProvider.contextName]:
      PropTypes.object.isRequired,
  }