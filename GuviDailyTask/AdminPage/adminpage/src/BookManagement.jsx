
import React, { useState } from 'react';
import BookForm from './BookForm';

const BookManagement = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  return (
    <div className="management-panel">
      <h2>Book Management</h2>
      <BookForm addBook={addBook} />
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} - {book.author}
            <button onClick={() => deleteBook(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookManagement;
