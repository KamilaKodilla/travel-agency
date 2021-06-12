import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption/OrderOption.scss';

const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div className={styles.text}>
    <input
      type="text"
      className={styles.input}
      placeholder={'Enter data'}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)} />
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
