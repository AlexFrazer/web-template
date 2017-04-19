import React from 'react';

import styles from 'app/styles/views/home.scss';

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
