import {formatPrice} from './formatPrice';

export const promoPrice = (price, promo) => {

  if(typeof(price) === 'string' && price.includes('$')) {
    price = price.slice(1).replace(',', '');
    price = parseFloat(price);
    return formatPrice(price - (price * promo / 100));
  }

  price = parseFloat(price);
  return price - (price * promo / 100);

};
