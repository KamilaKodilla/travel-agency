import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';

const sendOrder = (options, tripCost, tripName, tripId, tripCountryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    tripCountryCode,
  };

  if(options.name === '' || options.contact === ''){
    alert('Enter your name and contact details');
  }

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, options, setOrderOption, tripName, tripId, tripCountryCode}) => (
  <Row>
    {pricing.map((option) =>
      <Col md={4} key={option.id}>
        <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
      </Col>
    )}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options}/>
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, tripCountryCode)}>Order now!</Button>
    </Col>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.any,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  tripCountryCode: PropTypes.string,
};

export default OrderForm;
