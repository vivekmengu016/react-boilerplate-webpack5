import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Header from "../../components/Header";
import { setUser } from '../auth/store/actions';

const ProductsSingle = (props) => {
	let params = useParams();
	return (
		<div>
			<Header setUser={props.setUser} />
			<div className="section">
				<div className="innerwrap">
					{console.log('add', props)}
					<h1>Single Product Page For {params.id} </h1>
					<Link to="/products/cart">View Cart</Link>
				</div>
			</div>
		</div>
	)
};

export default connect(null, {
	setUser
})(ProductsSingle);