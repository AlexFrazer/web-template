import React from 'react';

import styles from 'app/styles/interface/button.scss';

type Props = {
  label: ?string,
  theme: ?'normal',
};

export default function Button({
  label = '',
  theme = 'normal',
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={styles.button}
    >
      {label}
    </button>
  );
}
