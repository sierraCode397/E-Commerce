import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from "@context/AppContext";
import '@styles/Menu.scss';

const Menu = () => {
	const { toggle, setToggle } = useContext(AppContext)

	return (
		<div className="Menu">
			<ul>
				<li>
					<Link to="/orders" className="title-Menu" onClick={() => setToggle(!toggle)}>My orders</Link>
				</li>
				<li>
					<Link to="/account" onClick={() => setToggle(!toggle)}>My account</Link>
				</li>
				<li>
					<Link to="/login" onClick={() => setToggle(!toggle)}>Sign out</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
