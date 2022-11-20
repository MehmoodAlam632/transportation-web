import "./style.css";

const InputField = ({placeholder, type, onChange}) => {
  return (
    <div className="input-group mb-3">
    <input type={type} onChange={onChange} className="form-control" id="floatingInputGroup1" placeholder={placeholder} />
    </div>
  );
};
export default InputField;
