import React from 'react';

import styles from 'app/styles/layout/layout.scss';
import Header from 'app/components/layout/Header';

type Props = { children: any };

export default function App({
  children,
}: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
