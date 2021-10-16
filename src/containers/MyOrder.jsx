import React, { useContext } from 'react';
import '@styles/MyOrder.scss'
import { OrderItem } from '@components/OrderItem';
import { AppContext } from '@context/AppContext';

import arrow from '@icons/flechita.svg'

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currenValue) => accumulator + currenValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
          <OrderItem product={product} key={`orderItem-${product.id}`}/>
        ))}
			</div>
      <div className="my-cost-container">
        <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <button className="primary-button">
            Checkout
          </button>
      </div>
		</aside>
  )
}

export { MyOrder }
