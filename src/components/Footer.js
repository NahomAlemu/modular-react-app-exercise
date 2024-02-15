import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#83831F',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };

  return <footer style={footerStyle}>This is the Footer</footer>;
}

export default Footer;
