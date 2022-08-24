import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import Login from "../modules/auth/Login";
import Register from "../modules/auth/Register";

import Dashboard from "../modules/dashboard";
import Products from "../modules/products/list";
import ProductsSingle from "../modules/products/single_product";
import Cart from "../modules/products/cart";
import Settings from "../modules/settings";
import Profile from "../modules/settings/Profile";
import FourZeroFour from "../modules/404";
import { connect } from "react-redux";

const RedirectToDashboard = () => {
	return <Navigate to="/dashboard" />
}

/**
 * Write your authentication logic here
 */
export const authMiddleware = connect((state) => ({
	user: state.auth.user
}), {})(({ component: Component, secure = false, user }) => {
	let hasCookie = user?.email ? true : false

	if (secure) {
		return hasCookie ? <Component /> : <Navigate to="/login" />
	}
	return !hasCookie ? <Component /> : <Navigate to="/dashboard" />
})

/**
 * List all your application routes here
 */
const routesList = [
	{
		path: '',
		secure: true,
		component: RedirectToDashboard
	},
	{
		path: 'login',
		secure: false,
		component: Login
	},
	{
		path: 'register',
		secure: false,
		component: Register
	},
	{
		path: 'dashboard',
		secure: true,
		component: Dashboard
	},
	{
		path: 'products',
		secure: true,
		component: Products,
		children: [
			{
				path: ':id',
				secure: true,
				component: ProductsSingle
			},
			{
				path: 'cart',
				component: Cart
			}
		]
	},
	{
		path: 'settings',
		secure: true,
		wrapper: Settings,
		children: [
			{
				path: 'profile',
				secure: true,
				component: Profile
			}
		]
	},
	{
		path: '*',
		component: FourZeroFour
	}
]

export default routesList 