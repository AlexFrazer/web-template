import React from 'react';

import styles from 'app/styles/app.scss';

type Props = { children: any };

export default function App({
  children,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
