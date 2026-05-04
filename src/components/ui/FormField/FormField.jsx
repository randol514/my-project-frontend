import "./formField.css";
const FormField = ({ children, label, htmlFor }) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
};

export default FormField;
