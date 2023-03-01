import React, {useState} from 'react';
import '@styles/ProductItem.scss';

import addTo from "@icons/bt_add_to_cart.svg";

const ProductItem = ({producth}) => {
	const [cart, setCart] = useState([])

	const handleClick = () => {
		setCart([])
	}

	return (
		<div className="ProductItem">
			<img src={producth.images[0]} alt={producth.title} />
			<div className="product-info">
				<div>
					<p>${producth.price}</p>
					<p>{producth.title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src= {addTo} alt="add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
