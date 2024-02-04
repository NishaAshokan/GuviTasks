import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const [editedStatus, setEditedStatus] = useState(todo.status);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedTitle(todo.title);
    setEditedDescription(todo.description);
    setEditedStatus(todo.status);
  };

  const handleEditSave = () => {
    onEdit(todo.id, editedTitle, editedDescription, editedStatus);
    setIsEditing(false);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {isEditing ? (
          <div>
            <div className="mb-3">
              <label htmlFor="editedTitle" className="form-label">
                Edited Title
              </label>
              <input
                type="text"
                className="form-control"
                id="editedTitle"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="editedDescription" className="form-label">
                Edited Description
              </label>
              <textarea
                className="form-control"
                id="editedDescription"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="editedStatus" className="form-label">
                Edited Status
              </label>
              <select
                className="form-select"
                id="editedStatus"
                value={editedStatus}
                onChange={(e) => setEditedStatus(e.target.value)}
              >
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <button onClick={handleEditSave} className="btn btn-success me-2">
              Save
            </button>
            <button onClick={handleEditToggle} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <h5 className="card-title">{todo.title}</h5>
            <p className="card-text">{todo.description}</p>
            <p className="card-text">
              Status: {todo.status}{' '}
              <span
                className={`badge bg-${
                  todo.status === 'Completed' ? 'success' : 'warning'
                }`}
              >
                {todo.status}
              </span>
            </p>
            <button onClick={handleEditToggle} className="btn btn-warning me-2">
              Edit
            </button>
            <button onClick={() => onDelete(todo.id)} className="btn btn-danger">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;


