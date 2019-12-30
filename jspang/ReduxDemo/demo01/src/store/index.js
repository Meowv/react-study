import { applyMiddleware, compose, createStore } from 'redux';
import createSageMiddleware from 'redux-saga';
// import thunk from 'redux-thunk'
import reducer from './reducer';
import mySages from './sagas';

const sagaMiddleware = createSageMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// const enhancer = composeEnhancers(applyMiddleware(thunk))
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(
    reducer,
    enhancer
)

sagaMiddleware.run(mySages)

export default store