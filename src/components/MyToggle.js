import React from 'react';

export default function MyToggle({on, toggle}) {
    return (
      <button onClick={toggle}>
        {on ? 'on' : 'off'}
      </button>
    )
  }