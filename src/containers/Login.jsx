import React from 'react';
import "../styles/login.scss";

const Login = () => {
    return (
        <div className="login">
            <section className="form-container">

                <img src="./Platzi_YardSale_Logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="title"> Create a new password</h1>
                <p className="subtitle">Enter a new password for you account</p>

                <form action="/" className="form">

                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />

                    <label for="new-password">New Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password" />

                    <input type="submit" value="Confirm" className="primary-button login-button" />

                </form>
            </section>
        </div>
    );
}

export default Login;