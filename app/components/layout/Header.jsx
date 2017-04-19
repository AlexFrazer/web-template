import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import styles from 'app/styles/layout/header.scss';

const NavLink = ({
  to,
  label,
  onlyActiveOnIndex = false,
}: {
  to: string,
  label: string,
  onlyActiveOnIndex: ?boolean,
}) => (
  <Link
    to={to}
    className={classnames({
      [styles.link]: true,
      [styles.title]: onlyActiveOnIndex && to === '/',
    })}
    activeClassName={to !== '/' ? styles.active : ''}
    onlyActiveOnIndex={onlyActiveOnIndex}
  >
    {label}
  </Link>
);

export default function Header() {
  return (
    <div className={styles.container}>
      <NavLink to="/" label="Web Template" onlyActiveOnIndex />
      <NavLink to="/counter" label="Counter" />
    </div>
  );
}
