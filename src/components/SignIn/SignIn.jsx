import './SignIn.scss';
import { useState } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    setInputs({ email: '', password: '' });
  };

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in">
      <h2 className="heading-2">I already have an account</h2>
      <p className="desc">Sign in with your email and password.</p>

      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type="email"
          name="email"
          required
          value={inputs.email}
          className="form__email"
          label="email"
        />
        <FormInput
          handleChange={handleChange}
          type="password"
          name="password"
          required
          value={inputs.password}
          className="form__password"
          label="password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn type="button">
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
