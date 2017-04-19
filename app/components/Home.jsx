import React from 'react';
import { Link } from 'react-router';

import styles from 'app/styles/home.scss';

type Props = {
  greeting: ?string,
};

export default function Home({
  greeting = 'Hello',
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.greeting}>{greeting}</div>
    </div>
  );
}
