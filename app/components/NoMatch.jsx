import React, { PropTypes } from 'react';

import Button from 'atoms/Button';
import styles from 'app/styles/nomatch.scss';

export default function NoMatch(router) {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.title}>
          Not Found.
        </div>
        <div className={styles.actions}>
          <Button
            label="Go Back"
            onClick={() => router.goBack()}
          />
          <Button
            label="Return Home"
            onClick={() => router.push('/')}
          />
        </div>
      </div>
    </div>
  );
}

NoMatch.contextTypes = {
  router: PropTypes.shape({
    push: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};
