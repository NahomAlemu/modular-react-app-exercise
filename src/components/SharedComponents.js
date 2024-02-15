import React from 'react';

export function Button(props) {
  const buttonStyle = {
    backgroundColor: '#7A4012',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '10px 0',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return <button style={buttonStyle}>{props.children}</button>;
}
