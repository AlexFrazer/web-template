import * as React from 'react';
import * as styles from 'app/styles/app.scss';
import Counter from 'app/components/counter/Counter';

export default function app() {
  return (
    <div className={styles.container}>
      <Counter title="Default Counter" />
      <Counter title="Initialized Counter" initial={1} />
    </div>
  );
}
