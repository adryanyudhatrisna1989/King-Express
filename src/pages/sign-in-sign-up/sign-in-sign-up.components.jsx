import React from 'react';
import SignIn from '../../components/Sign-in/sign-in.components';
import SignUp from '../../components/Sign-up/sign-up.components';
import './sign-in-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
