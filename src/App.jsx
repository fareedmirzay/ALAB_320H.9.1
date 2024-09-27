import React, { useReducer, useState } from 'react';
import TodoItem from './TodoItem.jsx'; 
import Form from './Form.jsx'; 
import './App.css'; 

// Reducer function to manage the todo list state
function todoReducer(todos, action) {
  switch (action.type) {
    case 'add':
      return [{ id: Date.now(), title: action.title, completed: false, isEditing: false }, ...todos];
    case 'toggle':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'delete':
      return todos.filter(todo => todo.id !== action.id);
    case 'edit':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, isEditing: true } : todo
      );
    case 'save':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, title: action.title, isEditing: false } : todo
      );
    default:
      return todos;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState('');
  const handleAddTodo = (newTodo) => {
    dispatch({ type: 'add', title: newTodo });
  };

  return (
    <div className="App">
      <h1>Ahmads Todo List</h1>

      {}
      <Form handleAddTodo={handleAddTodo} />

      {}
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </div>
  );
}
