import React from 'react';

const LeftArrow = ({ onClick }) => (
  <div className="arrow" id="left-arrow" onClick={onClick}>
    &#9664;
  </div>
);

export default LeftArrow;