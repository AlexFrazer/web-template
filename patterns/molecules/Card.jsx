import React, { PropTypes } from 'react';

import styles from 'molecules/card.scss';

export default function Card({
  title,
  children,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

Card.defaultProps = {
  children: null,
};
