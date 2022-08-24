import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser } from './store/actions'

import "./auth-style.scss";

const Login = ({ user, setUser }) => {

	const [email, setEmail] = useState('');

	return (
		<div>
			<div className="auth">
				<h1>Login</h1>
				<form id="login" onSubmit={(e) => {
					e.preventDefault();
					setUser({ email: email });
				}}>
					<label>Email id</label>
					<input type="email" name="emailid" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email id here..." />
					<button type="submit" disabled={!email}> Submit </button>
				</form>
			</div>
		</div>
	)
};

const mapStateToProps = (state) => ({
	user: state.user
})

export default connect(mapStateToProps, {
	setUser
})(Login); 