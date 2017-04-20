import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import styles from 'app/styles/layout/navlink.scss';

type Props = {
  to: string,
  label: string,
  onlyActiveOnIndex: ?boolean,
};

export default function NavLink({
  to,
  label,
  onlyActiveOnIndex = false,
}: Props) {
  return (
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
}
