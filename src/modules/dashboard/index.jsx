import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from './store/actions';
import { setUser } from '../auth/store/actions';
import Header from "../../components/Header";

import "./dashboard-style.scss";

const Dashboard = ({ dashboard, increment, decrement, user, setUser }) => {

	const incrementFn = (e) => {
		e.preventDefault();
		increment();
	}

	const decrementFn = (e) => {
		e.preventDefault();
		decrement();
	}

	return (
		<div>
			<Header setUser={setUser} />
			<div className="section">
				<div className="innerwrap">
					<h1>Welcome, {user.email}</h1>
					<br/>
					<button onClick={incrementFn} > Increment {dashboard.count} </button>
					<button onClick={decrementFn} > Decrement {dashboard.count} </button>
				</div>
			</div>
		</div>
	)
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
	dashboard: state.dashboard
})

export default connect(mapStateToProps,{
	increment,
	decrement,
	setUser
})(Dashboard);