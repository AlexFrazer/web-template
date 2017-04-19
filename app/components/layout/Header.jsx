import React from 'react';
import { Link, IndexLink } from 'react-router';

import styles from 'app/styles/layout/header.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <IndexLink to="/" className={styles.link}>Home</IndexLink>
      <Link to="/counter" className={styles.link} activeClassName={styles.activeLink}>
        Counter
      </Link>
    </div>
  );
}
