import React, {useState} from 'react';
import '@styles/ProductItem.scss';

import addTo from "@icons/bt_add_to_cart.svg";

const ProductItem = () => {
	const [cart, setCart] = useState([])

	const handleClick = () => {
		setCart([])
	}

	return (
		<div className="ProductItem">
			<img src="https://imgur.com/C9u9gLm.jpg" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Camera</p>
				</div>
				<figure onClick={handleClick}>
					<img src= {addTo} alt="add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
