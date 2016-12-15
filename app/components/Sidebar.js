import React, { Component, PropTypes } from 'react';
import { VelocityComponent } from 'velocity-react';

import styles from 'app/styles/sidebar.scss';

export default function Sidebar({
  isOpen,
  width = 288,
  easing = [.69,.04,.46,1.03],
  onChange = () => {},
}) {
  return (
    <VelocityComponent
        duration={200}
        easing={easing}
        complete={() => onChange(isOpen)}
        animation={{
          opacity: isOpen ? 1 : 0,
          translateX: isOpen ? 0 : '-100%'
        }}
      >
      <div style={{ width }} className={styles.container}>
      </div>
    </VelocityComponent>
  )
}

Sidebar.propTypes = {
  width: PropTypes.number,
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  easing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  onChange: PropTypes.func,
}
