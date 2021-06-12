import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import styles from '../OrderOption/OrderOption.scss';

const OrderOptionDate = () => {
  const [date, handleDateSelect, handleDateChange] = useState(new Date());
  return (
    <DatePicker
      className={styles.input}
      selected={date}
      onSelect={handleDateSelect} //when day is clicked
      onChange={handleDateChange} //only when value has changed
    />
  );
};

OrderOptionDate.propTypes = {
  date: PropTypes.any,
  handleDateSelect: PropTypes.func,
  handleDateChange: PropTypes.func,
};

export default OrderOptionDate;
