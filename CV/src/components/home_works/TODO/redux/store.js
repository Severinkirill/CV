import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoReducer from './reducers.js';
import { todoSaga } from './sagas.js';

const rootReducer = combineReducers({
    todos: todoReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(todoSaga);

export default store;
