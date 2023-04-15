import { object, string, number, date, InferType } from 'yup';
import * as yup from 'yup';

const userSchema = object({
  email: string().email('Invalid email address').required('Email is required'),
  password: string()
    .min(5, 'Password must be at least 5 characters')
    .max(20, 'Password must be at most 20 characters')
    .required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
});

export default userSchema;
