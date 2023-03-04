import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Name</label>
						<input type="text" id="name" placeholder="Teff" className="input input-name" />
						<label for="email" className="label">Email</label>
						<input type="text" id="email" placeholder="platzi@example.com" className="input input-email" />
						<label for="password" className="label">Password</label>
						<input type="password" id="password" placeholder="*********" className="input input-password" />
					</div>
					<Link to="/E-Commerce">
						<button className="primary-button-account login-button" >Create</button>
					</Link>
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;
