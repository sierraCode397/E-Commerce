import React, { useContext, useState} from 'react';
import { Link } from "react-router-dom";
import OrderItem from '@components/OrderItem';
import AppContext from "@context/AppContext";
import '@styles/MyOrder.scss';

import arrow from "@icons/flechita.svg";

const MyOrder = () => {
	const {state, sumTotal, toggleOrders, setToggleOrders} = useContext(AppContext)

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
					<Link to="/orders" className="title" onClick={()=> setToggleOrders(!toggleOrders)}>My order</Link>
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
					<Link to="/checkout" onClick={() => setToggleOrders(!toggleOrders)}>
						<button className="primary-button">
							Checkout 
						</button>
					</Link>
				</div>

			</aside>
		);
	}
}

export default MyOrder;