import React, { useState, useEffect } from 'react';
import rand from '../utils/random';
import './Icon.scss';

const Icon = ({ className, height, width }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      top: rand(height, width).hei,
      left: rand(height, width).wid,
      transitionProperty: 'position',
      transitionDuration: '4s',
    });
  }, [height, width]);

  const handleEnter = (e) => {
    var maxX = width - 60 - e.target.clientWidth;
    var maxY = height - 60 - e.target.clientHeight;
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const newStyle = {
      top: getRandomInt(0, maxY),
      left: getRandomInt(0, maxX),
    };
    setStyle(newStyle);
  };

  return <i onMouseEnter={handleEnter} className={className} style={style}></i>;
};

export default Icon;
