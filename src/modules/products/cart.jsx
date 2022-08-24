import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";

import { setUser } from '../auth/store/actions';

const Cart = ({ setUser }) => (
	<div>
		<Header setUser={setUser} />
		<div className="section">
			<div className="innerwrap">
				<h1>Your Cart Is Empty</h1>
			</div>
		</div>
	</div>
);

export default connect(null, {
	setUser
})(Cart);