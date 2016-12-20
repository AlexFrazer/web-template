import React, { PropTypes } from 'react';
import { VelocityComponent } from 'velocity-react';

import styles from 'app/styles/sidebar.scss';

export default function Sidebar({
  close,
  isOpen,
  width = 288,
  easing = [0.69, 0.04, 0.46, 1.03],
  onChange = () => {},
}) {
  return (
    <VelocityComponent
      duration={200}
      easing={easing}
      complete={() => onChange(isOpen)}
      animation={{
        opacity: isOpen ? 1 : 0,
        translateX: isOpen ? 0 : '-100%',
      }}
    >
      <div style={{ width }} className={styles.container}>
        <button className={styles.close} onClick={close} />
      </div>
    </VelocityComponent>
  );
}

Sidebar.propTypes = {
  width: PropTypes.number,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  easing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  onChange: PropTypes.func,
};
