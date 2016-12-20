import React, { PropTypes } from 'react';

export default function MenuIcon({
  onClick = () => {},
  width = 48,
  height = 48,
  className = '',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      onClick={onClick}
      className={className}
      viewBox={`0 0 ${width} ${height}`}
    >
      <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" />
    </svg>
  );
}

MenuIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
