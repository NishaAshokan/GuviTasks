import React from 'react';

function UserForm({ formData, handleChange, handleSubmit, handleCancel }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      <label>Phone:</label>
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
      <button type="submit">{formData.id ? 'Update' : 'Submit'}</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
}

export default UserForm;

