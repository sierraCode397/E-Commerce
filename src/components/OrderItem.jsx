import React from 'react';
import '@styles/OrderItem.scss';

import close from "@icons/icon_close.png";

const OrderItem = () => {
	return (
		<div className="OrderItem">
			<figure>
				<img src="https://imgur.com/C9u9gLm.jpg" alt="Camera" />
			</figure>
			<p>Camera</p>
			<p>$30,00</p>
			<img src= {close} alt="close" />
		</div>
	);
}

export default OrderItem;
