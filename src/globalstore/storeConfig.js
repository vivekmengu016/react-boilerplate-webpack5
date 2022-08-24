import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga'

import rootSaga from './rootSaga'
import RootReducer from './rootReducer'

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(
		RootReducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware))
	)
	sagaMiddleware.run(rootSaga)
	return store
}

const store = configureStore()

export default store
