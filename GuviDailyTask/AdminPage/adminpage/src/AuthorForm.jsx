// components/AuthorForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ addAuthor }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      birthDate: '',
      biography: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      birthDate: Yup.date().required('Required').nullable(),
      biography: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addAuthor(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="form-control">
        <label htmlFor="birthDate">Birth Date</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          {...formik.getFieldProps('birthDate')}
        />
        {formik.touched.birthDate && formik.errors.birthDate ? (
          <div className="error">{formik.errors.birthDate}</div>
        ) : null}
      </div>
      <div className="form-control">
        <label htmlFor="biography">Biography</label>
        <textarea
          id="biography"
          name="biography"
          {...formik.getFieldProps('biography')}
        />
        {formik.touched.biography && formik.errors.biography ? (
          <div className="error">{formik.errors.biography}</div>
        ) : null}
      </div>
      <button type="submit">Add Author</button>
    </form>
  );
};

export default AuthorForm;
