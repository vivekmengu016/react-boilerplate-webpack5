import React from "react";
import { Link } from "react-router-dom";


const Register = () => (
	<div>
		<div className="auth">
			<h1>Register</h1>
			<form id="login" onSubmit={(e) => {
					e.preventDefault();
				}}>
					<label>First Name</label>
					<input type="email" name="emailid" placeholder="Please enter your email id here..." />
					<label>Email id</label>
					<input type="email" name="emailid" placeholder="Please enter your email id here..." />
					<label>Password</label>
					<input type="email" name="emailid" placeholder="Please enter your email id here..." />
					<button type="submit"> Submit </button>
				</form>
		</div>
	</div>
);

export default Register;