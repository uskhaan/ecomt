import * as yup from 'yup';
import {phoneRegExp} from '../constants';

export const loginFormFields = {
  email: '',
  password: '',
};

export const LoginVs = yup.object().shape({
  email: yup.string().email().required('Email Required'),
  password: yup.string().required('Password Required'),
});

export const signupFormFields = {
  firstname: '',
  lastname: '',
  password: '',
  repassword: '',
  email: '',
  phone: '',
};

export const sendOTPFormFields = {
  phone: '',
};

export const signUpVS = yup.object().shape({
  firstname: yup.string().optional('First Name Required'),
  lastname: yup.string().optional('Last Name Required'),
  password: yup.string().optional('Password Required'),
  repassword: yup.string().optional('Re-enter Password Required'),
  email: yup.string().email().optional('Email Required'),
  phone: yup
    .string()
    .required('Phone number Required')
    .matches(phoneRegExp, 'Phone number is not valid!'),
});

export const sendOTPVS = yup.object().shape({
  phone: yup
    .string()
    .required('Phone number Required')
    .matches(phoneRegExp, 'Phone number is not valid!'),
});
