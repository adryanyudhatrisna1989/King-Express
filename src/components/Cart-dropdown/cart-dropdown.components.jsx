import React from 'react';
import CustomButton from '../Custom-button/custom-button.components';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

export default CartDropdown;
