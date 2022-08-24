import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import JsonRoutes from "react-router-dom-jsonroutes";
import { Provider } from "react-redux";
import store from "./globalstore/storeConfig";

import routesList, { authMiddleware } from "./routes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import "./styles/main.scss";

root.render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<JsonRoutes routesList={routesList} authMiddleware={authMiddleware} />
			</BrowserRouter>
		</Provider>
	</StrictMode>
); 