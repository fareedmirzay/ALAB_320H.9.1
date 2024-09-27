import React from 'react';

export default function TodoItem({ todo, dispatch }) {
  return (
    <li>
      {todo.isEditing ? (
        <input
          type="text"
          defaultValue={todo.title}
          onBlur={(e) => dispatch({ type: 'save', id: todo.id, title: e.target.value })}
        />
      ) : (
        <>
          {}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: 'toggle', id: todo.id })}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </span>

          {}
          <button onClick={() => dispatch({ type: 'edit', id: todo.id })}>Edit</button>
          <button
            onClick={() => dispatch({ type: 'delete', id: todo.id })}
            disabled={!todo.completed}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}
