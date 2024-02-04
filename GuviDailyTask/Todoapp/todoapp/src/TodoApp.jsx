import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoApp.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: todos.length + 1, status: 'Not Completed' }]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, title, description, status) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title, description, status } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-4">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
};

export default TodoApp;

