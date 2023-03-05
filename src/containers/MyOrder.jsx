import React, { useContext, useState} from 'react';
import OrderItem from '@components/OrderItem';
import Orders from "@pages/Orders"
import AppContext from "@context/AppContext";
import '@styles/MyOrder.scss';

import arrow from "@icons/flechita.svg";

const MyOrder = () => {
	const {state} = useContext(AppContext)
	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => 
		accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	const [menu, setMenu] = useState(true);
	const handleMenu = () => {
	  if (menu == false) {
		setMenu(true);
	  } else {
		setMenu(false);
	  }
	};

	if (menu == true) {
		return (
			<aside className="MyOrder">
				<div className="title-container">		
						<img src= {arrow} alt="arrow" onClick={handleMenu} className="arrow" />
					<p className="title">My order</p>
				</div>
				<div className="my-order-content">
				{state.cart.map(product => (
				<OrderItem product={product} key={`orderItem-${product.id}`}/>
					))}
					<div className="order">
						<p>
							<span>Total</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
					<button className="primary-button">
						<a href="/#/orders">Checkout</a> 
					</button>
				</div>

			</aside>
		);
	}
}

export default MyOrder;