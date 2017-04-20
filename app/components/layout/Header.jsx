import React from 'react';
import NavLink from 'app/components/layout/NavLink';

import styles from 'app/styles/layout/header.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <NavLink to="/" label="Web Template" onlyActiveOnIndex />
      <NavLink to="/counter" label="Counter" />
    </div>
  );
}
