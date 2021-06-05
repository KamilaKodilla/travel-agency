import { getOrderOptions } from '../../../redux/orderRedux';
import OrderForm from './OrderForm';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

export default connect(mapStateToProps)(OrderForm);
