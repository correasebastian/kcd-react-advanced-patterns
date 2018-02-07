import React, { Component } from 'react';

function Switch({on, className = '', ...props}) {
    return (
      <div className="toggle">
        <input
          className="toggle-input"
          type="checkbox"
        />
        <button
          className={`${className} toggle-btn ${on
            ? 'toggle-btn-on'
            : 'toggle-btn-off'}`}
          aria-expanded={on}
          {...props}
        />
      </div>
    )
  }

export default class Toggle extends Component {
    static defaultProps = {onToggle: () => {}}
    state = {on: false}

    toggle = () =>
      this.setState(
        ({on}) => ({on: !on}),
        () => {
          this.props.onToggle(this.state.on)
        },
      )

    render() {
      const {on} = this.state
      return (
        <Switch on={on} onClick={this.toggle} />
      )
    }
  }