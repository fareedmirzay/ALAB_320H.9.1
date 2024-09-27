import React, { useState } from 'react';

export default function Form({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      handleAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
}
