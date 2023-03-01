import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addTo from "@icons/bt_add_to_cart.svg";

const ProductItem = ({producth}) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={producth.images[0]} alt={producth.title} />
			<div className="product-info">
				<div>
					<p>${producth.price}</p>
					<p>{producth.title}</p>
				</div>
				<figure onClick={() => handleClick(producth)} >
					<img src= {addTo} alt="add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
