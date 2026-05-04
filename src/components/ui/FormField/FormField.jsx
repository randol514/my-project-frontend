import "./formField.css";
const FormField = ({ children, label, htmlFor, error }) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {error && <p className="form-field__error">{error}</p>}
    </div>
  );
};

export default FormField;
