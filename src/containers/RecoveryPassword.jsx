import React from 'react';
import "../styles/RecoveryPassword.scss"

const RecoveryPassword = () => {
    return (
        <main className="login">
            <section className="form-container">

                <img src="./Platzi_YardSale_Logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="title">Email has been sent!!</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>

                <figure className="email-image">
                    <img src="./Platzi_YardSale_Icons/email.svg" alt="Email" />
                </figure>

                
                <button className="primary-button login-button">Login</button>

                <p className="resend">
                    <span>Did not receive the email?</span>
                    <a href="/">Resend</a>
                </p>

            </section>
        </main>
    );
}

export default RecoveryPassword;