import React from 'react';
import '../styles/ProductItem.scss';

const ProductItem = () => {
	return (
		<div className="ProductItem">
			<img src="https://imgur.com/C9u9gLm.jpg" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Camera</p>
				</div>
				<figure>
					<img src="./icons/bt_add_to_cart.svg" alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
