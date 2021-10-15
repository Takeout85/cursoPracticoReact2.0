import React from 'react';
import close from '../static/icons/icon_close.png'
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={close} alt="close" />
			</div>
			<ProductInfo />
		</aside>
  )
}

export { ProductDetail }
