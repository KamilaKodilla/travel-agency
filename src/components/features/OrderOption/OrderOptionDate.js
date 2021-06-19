import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import styles from '../OrderOption/OrderOption.scss';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div>
    <DatePicker
      className={styles.input}
      value={currentValue}
      selected={currentValue}
      onChange={setOptionValue}
      placeholderText={'Choose date'}
    />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
