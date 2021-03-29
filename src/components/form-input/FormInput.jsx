import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="input-group">
    <input onChange={handleChange} {...otherProps} />
    {label ? <label className={(otherProps.value.length ? 'shrink ' : '') + 'form__input-label'}>{label}</label> : null}
  </div>
);

export default FormInput;
