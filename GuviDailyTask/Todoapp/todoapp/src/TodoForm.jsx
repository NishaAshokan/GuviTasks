import React, { useState } from 'react';
import './TodoForm.css'; // Import the CSS file for specific styles

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      addTodo({
        title: title,
        description: description,
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-row align-items-center">
        <div className="col-md-4 mb-2">
          <label htmlFor="title" className="sr-only">
            Title
          </label>
          <input
            type="text"
            className="Title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          
        </div>
        <div className="col-md-4 mb-2">
          <label htmlFor="description" className="Description">
            Description
          </label>
          <textarea
            className="Descript"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="col-md-4 mb-2">
          <button type="submit" className="Button">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;


