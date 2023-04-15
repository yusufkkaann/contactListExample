import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import userSchema from './validations';
import './styles.css';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
    validationSchema: userSchema
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="error-message">{formik.errors.email}</div>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type='password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && (
          <div className="error-message">{formik.errors.password}</div>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type='password'
          name='confirmPassword'
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <div className="error-message">{formik.errors.confirmPassword}</div>
        )}
      </div>

      <button type="submit">Submit</button>
      <br />
      <br />
      <code>{JSON.stringify(formik.values)}</code>
    </form>
  );
};

export default SignupForm;
