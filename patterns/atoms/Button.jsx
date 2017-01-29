import classnames from 'classnames';
import React, { PropTypes } from 'react';

import styles from 'atoms/button.scss';

export default function Button({ label, onClick, className, ...props }) {
  return (
    <button
      onClick={onClick}
      className={classnames(styles.button, className)}
      {...props}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};
