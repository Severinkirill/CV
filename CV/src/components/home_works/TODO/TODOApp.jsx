import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo, toggleTodo, editTodo } from './redux/actioncreators';

function TODOApp() {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector(state => state.todos);
    const [newTodoText, setNewTodoText] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodoText.trim()) {
            dispatch(addTodo(newTodoText));
            setNewTodoText('');
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleEdit = (id, text) => {
        setEditingId(id);
        setEditingText(text);
    };

    const handleSaveEdit = (id) => {
        if (editingText.trim()) {
            dispatch(editTodo(id, editingText));
            setEditingId(null);
            setEditingText('');
        }
    };

    return (

        <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-10 min-h-[70vh]">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
                Список завдань 📝
            </h1>


            <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
                <input
                    type="text"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    placeholder="Додати нове завдання"
                    className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                    type="submit"
                    disabled={loading || !newTodoText.trim()}
                    className="bg-amber-500 text-white font-semibold py-3 px-5 rounded-lg hover:bg-amber-600 transition disabled:bg-gray-400"
                >
                    Додати
                </button>
            </form>

            {loading && <p className="text-center text-blue-500">Завантаження...</p>}
            {error && <p className="text-center text-red-600 font-bold">Помилка: {error}</p>}


            <ul className="space-y-3">
                {items.map(todo => (
                    <li key={todo.id} className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition">
                        {editingId === todo.id ? (
                            // РЕЖИМ РЕДАКТИРОВАНИЯ
                            <div className="flex flex-grow gap-2">
                                <input
                                    type="text"
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                    className="flex-grow p-2 border border-blue-400 rounded-lg focus:outline-none"
                                />
                                <button
                                    onClick={() => handleSaveEdit(todo.id)}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                                >
                                    Зберегти
                                </button>
                            </div>
                        ) : (

                            <>
                                <span

                                    className={`cursor-pointer text-gray-700 text-lg flex-grow mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}
                                    onClick={() => handleToggle(todo.id)}
                                >
                                  {todo.text}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(todo.id, todo.text)}
                                        className="bg-yellow-500 text-white py-2 px-3 rounded-lg hover:bg-yellow-600 text-sm transition"
                                    >
                                        Редагувати
                                    </button>
                                    <button
                                        onClick={() => handleDelete(todo.id)}
                                        className="bg-red-500 text-white py-2 px-3 rounded-lg hover:bg-red-600 text-sm transition"
                                    >
                                        Видалити
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TODOApp;