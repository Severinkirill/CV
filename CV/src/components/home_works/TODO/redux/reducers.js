import * as actionTypes from './const.js';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TODOS:
        case actionTypes.ADD_TODO:
        case actionTypes.DELETE_TODO:
        case actionTypes.TOGGLE_TODO:
        case actionTypes.EDIT_TODO:
            return { ...state, loading: true, error: null };

        case actionTypes.FETCH_TODOS_SUCCESS:
            return { ...state, loading: false, items: action.payload.todos };

        case actionTypes.ADD_TODO_SUCCESS:
            return { ...state, loading: false, items: [...state.items, action.payload.todo] };

        case actionTypes.DELETE_TODO_SUCCESS:
            return { ...state, loading: false, items: state.items.filter(todo => todo.id !== action.payload.id) };

        case actionTypes.TOGGLE_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.map(todo =>
                    todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                ),
            };

        case actionTypes.EDIT_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.map(todo =>
                    todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
                ),
            };

        case actionTypes.FETCH_TODOS_FAILURE:
        case actionTypes.ADD_TODO_FAILURE:
        case actionTypes.DELETE_TODO_FAILURE:
        case actionTypes.TOGGLE_TODO_FAILURE:
        case actionTypes.EDIT_TODO_FAILURE:
            return { ...state, loading: false, error: action.payload.error };

        default:
            return state;
    }
};

export default todoReducer;