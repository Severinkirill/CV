import { takeLatest, put, delay } from 'redux-saga/effects';
import * as actionTypes from './const.js';

// Імітація бази даних
let nextTodoId = 0;
const mockDatabase = [];

function* fetchTodosSaga() {
    try {
        yield delay(500); // Імітація затримки мережі
        yield put({ type: actionTypes.FETCH_TODOS_SUCCESS, payload: { todos: mockDatabase } });
    } catch (e) {
        yield put({ type: actionTypes.FETCH_TODOS_FAILURE, payload: { error: e.message } });
    }
}

function* addTodoSaga(action) {
    try {
        yield delay(500); // Імітація затримки мережі
        const newTodo = {
            id: nextTodoId++,
            text: action.payload.text,
            completed: false,
        };
        mockDatabase.push(newTodo);
        yield put({ type: actionTypes.ADD_TODO_SUCCESS, payload: { todo: newTodo } });
    } catch (e) {
        yield put({ type: actionTypes.ADD_TODO_FAILURE, payload: { error: e.message } });
    }
}

function* deleteTodoSaga(action) {
    try {
        yield delay(500);
        const id = action.payload.id;
        const index = mockDatabase.findIndex(todo => todo.id === id);
        if (index !== -1) {
            mockDatabase.splice(index, 1);
        }
        yield put({ type: actionTypes.DELETE_TODO_SUCCESS, payload: { id } });
    } catch (e) {
        yield put({ type: actionTypes.DELETE_TODO_FAILURE, payload: { error: e.message } });
    }
}

function* toggleTodoSaga(action) {
    try {
        yield delay(500);
        const id = action.payload.id;
        const todo = mockDatabase.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
        yield put({ type: actionTypes.TOGGLE_TODO_SUCCESS, payload: { id } });
    } catch (e) {
        yield put({ type: actionTypes.TOGGLE_TODO_FAILURE, payload: { error: e.message } });
    }
}

function* editTodoSaga(action) {
    try {
        yield delay(500);
        const { id, newText } = action.payload;
        const todo = mockDatabase.find(t => t.id === id);
        if (todo) {
            todo.text = newText;
        }
        yield put({ type: actionTypes.EDIT_TODO_SUCCESS, payload: { id, newText } });
    } catch (e) {
        yield put({ type: actionTypes.EDIT_TODO_FAILURE, payload: { error: e.message } });
    }
}

// Головна сага, яка "слухає" дії
export function* todoSaga() {
    yield takeLatest(actionTypes.FETCH_TODOS, fetchTodosSaga);
    yield takeLatest(actionTypes.ADD_TODO, addTodoSaga);
    yield takeLatest(actionTypes.DELETE_TODO, deleteTodoSaga);
    yield takeLatest(actionTypes.TOGGLE_TODO, toggleTodoSaga);
    yield takeLatest(actionTypes.EDIT_TODO, editTodoSaga);
}