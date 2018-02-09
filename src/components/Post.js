import React from 'react';
import { ConnectedToggle, withToggle } from "./ToggleProvider";

const Subtitle = withToggle(
  ({toggle}) =>
    toggle.on
      ? '👩‍🏫 👉 🕶'
      : 'Teachers are awesome',
)
  
  function Title() {
    return (
      <div>
        <h1>
          <ConnectedToggle
            render={toggle =>
              `Who is ${toggle.on
                ? '🕶❓'
                : 'awesome?'}`}
          />
        </h1>
        <Subtitle />
      </div>
    )
  }
  
  function Article() {
    return (
      <div>
        <ConnectedToggle
          render={toggle =>
            [
              'Once, I was in',
              toggle.on ? '🏫‍' : 'school',
              'when I',
              toggle.on ? '🤔' : 'realized',
              'something...',
            ].join(' ')}
        />
        <hr />
        <ConnectedToggle
          render={toggle =>
            [
              'Without',
              toggle.on ? '👩‍🏫' : 'teachers',
              `I wouldn't know anything so`,
              toggle.on ? '🙏' : 'thanks',
              toggle.on ? '👩‍🏫❗️' : 'teachers!',
            ].join(' ')}
        />
      </div>
    )
  }
  
  export function Post() {
    return (
      <div>
        <Title />
        <Article />
      </div>
    )
  }