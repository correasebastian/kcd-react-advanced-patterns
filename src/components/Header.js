import React from 'react';
import { ConnectedToggle } from "./ToggleProvider";
import Switch from "./Switch";

function Nav() {
    return (
      <ConnectedToggle
        render={toggle => (
          <nav style={{flex: 1}}>
            <ul
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                listStyle: 'none',
                paddingLeft: '0',
              }}
            >
              <li>
                <a href="index.html">
                  {toggle.on ? '🏡' : 'Home'}
                </a>
              </li>
              <li>
                <a href="/about/">
                  {toggle.on ? '❓' : 'About'}
                </a>
              </li>
              <li>
                <a href="/blog/">
                  {toggle.on ? '📖' : 'Blog'}
                </a>
              </li>
            </ul>
          </nav>
        )}
      />
    )
  }
  
  function NavSwitch() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div>
          <ConnectedToggle
            render={toggle =>
              toggle.on ? '🦄' : 'Enable Emoji'}
          />
        </div>
        <ConnectedToggle
          render={toggle => (
            <Switch
              {...toggle.getTogglerProps({
                on: toggle.on,
              })}
            />
          )}
        />
      </div>
    )
  }

export function Header() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Nav />
          <NavSwitch />
        </div>
      </div>
    )
  }
  