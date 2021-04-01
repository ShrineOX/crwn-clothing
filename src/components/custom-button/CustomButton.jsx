import './CustomButton.scss';

const CustomButton = ({ children, className, ...otherProps }) => (
  <button className={`${className && className} custom-btn`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
