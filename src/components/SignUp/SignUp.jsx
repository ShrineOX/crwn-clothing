import './SignUp.scss';
import { useState } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    displayName: '',
    email: '',
    password: '',
    cfmPassword: '',
    termAgreement: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, cfmPassword, termAgreement } = inputs;
    // check confirm password
    if (password !== cfmPassword) {
      alert("Passwords don't match");
      return;
    }
    // checked term agreement checkbox
    if (!termAgreement) {
      alert('Please agree with our terms to continue');
      return;
    }

    // create new user
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      // create user on firebase database
      await createUserProfileDocument(user, { displayName });
      // Remove existing data on input fields
      setInputs({ displayName: '', email: '', password: '', cfmPassword: '', termAgreement: '' });
    } catch (error) {
      alert('Error creating user ' + error.message);
    }
  };

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCheckbox = e => {
    const value = e.target.checked ? true : false;
    setInputs({ ...inputs, termAgreement: value });
  };

  return (
    <div className="sign-up">
      <h2 className="heading-2">I do not have an account</h2>
      <p className="desciption">Sign up with your email and password.</p>

      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type="text"
          name="displayName"
          id="displayName"
          required
          value={inputs.displayName}
          className="form__displayName"
          label="Display Name"
        />
        <FormInput
          name="email"
          id="email"
          label="Email"
          value={inputs.email}
          type="email"
          required
          handleChange={handleChange}
          className="form__email"
        />
        <FormInput
          handleChange={handleChange}
          type="password"
          name="password"
          id="password"
          required
          value={inputs.password}
          className="form__password"
          label="password"
        />
        <FormInput
          name="cfmPassword"
          id="cfmPassword"
          label="Confirm password"
          value={inputs.cfmPassword}
          required
          className="form__cfmPassword"
          handleChange={handleChange}
          type="password"
        />
        <div className="input-group  input-group--checkbox">
          <input type="checkbox" name="termAgreement" id="termAgreement" onClick={handleCheckbox} />
          <label htmlFor="termAgreement">
            I accept the <a href="#">Term of Use</a> and <a href="#">Privacy Policy</a>
          </label>
        </div>
        <CustomButton type="submit" className="stretch">
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
