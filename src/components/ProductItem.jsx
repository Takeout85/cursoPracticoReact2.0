import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import { AppContext } from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedCartImage from '@icons/bt_added_to_cart.svg'

const ProductItem = ({ product}) => {
  const { state, addToCart, removeFromCart } = useContext(AppContext);


  const handleCart =  (item) => {
    let itemFind = state.cart.find(product => product.id === item.id)
    
    if (itemFind) {
      removeFromCart(item);

    } else {
      addToCart(item);
    }

  };

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleCart(product)}>
					<img src={product.addImage? addedCartImage: addToCartImage} alt="addtoCart" />
				</figure>
			</div>
		</div>
	);
};

export { ProductItem };