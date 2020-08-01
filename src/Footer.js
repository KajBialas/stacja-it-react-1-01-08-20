import React from 'react';

const TEXT = 'Copyright 2020';

function Footer() {
  const handleClick = () => console.log('Kliknięcie footer');

  return (
    <footer onClick={handleClick}>
      {TEXT}
    </footer>
  )
}

export default Footer;