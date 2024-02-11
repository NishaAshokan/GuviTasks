
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ addBook }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
      publicationDate: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      author: Yup.string().required('Required'),
      isbn: Yup.string().required('Required'),
      publicationDate: Yup.date().required('Required').nullable(),
    }),
    onSubmit: (values, { resetForm }) => {
      addBook(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          {...formik.getFieldProps('title')}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="error">{formik.errors.title}</div>
        ) : null}
      </div>
      <div className="form-control">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          {...formik.getFieldProps('author')}
        />
        {formik.touched.author && formik.errors.author ? (
          <div className="error">{formik.errors.author}</div>
        ) : null}
      </div>
      <div className="form-control">
        <label htmlFor="isbn">ISBN</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          {...formik.getFieldProps('isbn')}
        />
        {formik.touched.isbn && formik.errors.isbn ? (
          <div className="error">{formik.errors.isbn}</div>
        ) : null}
      </div>
      <div className="form-control">
        <label htmlFor="publicationDate">Publication Date</label>
        <input
          type="date"
          id="publicationDate"
          name="publicationDate"
          {...formik.getFieldProps('publicationDate')}
        />
        {formik.touched.publicationDate && formik.errors.publicationDate ? (
          <div className="error">{formik.errors.publicationDate}</div>
        ) : null}
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
