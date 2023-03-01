import React from 'react';
import '../styles/OrderItem.scss';

const OrderItem = () => {
	return (
		<div className="OrderItem">
			<figure>
				<img src="https://imgur.com/C9u9gLm.jpg" alt="Camera" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<img src="./icons/icon_close.png" alt="close" />
		</div>
	);
}

export default OrderItem;
