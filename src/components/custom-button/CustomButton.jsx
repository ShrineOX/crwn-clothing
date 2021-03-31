import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn && 'isGoogleSignIn'} custom-btn`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
