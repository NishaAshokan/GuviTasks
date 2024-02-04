import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoApp.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
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
      {Array.from({ length: Math.ceil(todos.length / 3) }, (_, index) => (
        <div className="row" key={index}>
          {todos.slice(index * 3, index * 3 + 3).map((todo) => (
            <div className="col-md-4" key={todo.id}>
              <TodoForm addTodo={addTodo} />
            </div>
          ))}
        </div>
      ))}
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
};

export default App;

