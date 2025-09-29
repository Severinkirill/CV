import * as actionTypes from './const.js';

export const addTodo = (text) => ({
    type: actionTypes.ADD_TODO,
    payload: { text },
});

export const fetchTodos = () => ({
    type: actionTypes.FETCH_TODOS,
});

export const deleteTodo = (id) => ({
    type: actionTypes.DELETE_TODO,
    payload: { id },
});

export const toggleTodo = (id) => ({
    type: actionTypes.TOGGLE_TODO,
    payload: { id },
});

export const editTodo = (id, newText) => ({
    type: actionTypes.EDIT_TODO,
    payload: { id, newText },
});