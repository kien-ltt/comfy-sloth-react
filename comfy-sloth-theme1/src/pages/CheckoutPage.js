import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, clearCart } = useCartContext();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>your cart is empty</h2>
            <Link to='/products' className='btn'>
              fill it
            </Link>
          </div>
        ) : (
          <div>
            <button
              type='button'
              className='btn'
              onClick={() => {
                alert('Checkout successfully!');
                clearCart();
                history.replace('/');
              }}
            >
              press to pay
            </button>
          </div>
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
