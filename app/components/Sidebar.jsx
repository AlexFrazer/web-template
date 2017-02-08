import debounce from 'lodash/debounce';
import React, { Component, PropTypes } from 'react';
import { VelocityComponent } from 'velocity-react';

import styles from 'app/styles/sidebar.scss';

export default class Sidebar extends Component {
  static propTypes = {
    width: PropTypes.number,
    close: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    width: 288,
    onChange: () => {},
  };

  componentDidMount() {
    window.addEventListener('keyup', this.onKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyup);
  }

  onKeyup = debounce(({ which }) => {
    if (which === 27) {
      this.props.close();
    }
  }, 200);

  render() {
    const { width, isOpen, onChange } = this.props;

    return (
      <VelocityComponent
        duration={200}
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
}
