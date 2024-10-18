import React, { useState } from 'react';

const Button = () => {
  const [text, setText] = useState('Click me!');

  const handleClick = () => {
    setText('Clicked!');
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;