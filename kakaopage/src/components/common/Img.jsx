import React from 'react';

const Img = ({ url, description }) => {
  return <img src={url} alt={description} />;
};

export default Img;
