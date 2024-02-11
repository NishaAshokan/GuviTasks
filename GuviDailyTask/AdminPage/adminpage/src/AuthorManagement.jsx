
import React, { useState } from 'react';
import AuthorForm from './AuthorForm';

const AuthorManagement = () => {
  const [authors, setAuthors] = useState([]);

  const addAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const deleteAuthor = (index) => {
    const newAuthors = [...authors];
    newAuthors.splice(index, 1);
    setAuthors(newAuthors);
  };

  return (
    <div className="management-panel">
      <h2>Author Management</h2>
      <AuthorForm addAuthor={addAuthor} />
      <ul>
        {authors.map((author, index) => (
          <li key={index}>
            {author.name} - {author.birthDate}
            <button onClick={() => deleteAuthor(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorManagement;
