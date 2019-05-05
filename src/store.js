import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from'./rootSaga';

const sagaMiddleware = createSagaMiddleware();

const getMiddleware = () => {
    if(false) {
        return applyMiddleware(sagaMiddleware, createLogger());
    }else {
        return applyMiddleware(sagaMiddleware, createLogger());
    }
};

const store = createStore(reducer, composeWithDevTools(getMiddleware()));
sagaMiddleware.run(rootSaga);

export default store;