import React from 'react';
import Logo from '../static/logos/logo_yard_sale.svg';
import email from '../static/icons/email.svg'
import '../styles/PasswordRecovery.scss'

const  PasswordRecovery = () => {
  return (
    <div className="login">
			<div className="form-container">
				<img src={Logo} alt="logo" className="logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={email} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
  );
};

export { PasswordRecovery };
