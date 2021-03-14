import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input } from "reactstrap";

InputField.propTypes = {
  // Nó bao gồm 2 giá trị mặc đinh cần có là field và form
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  // các props được định nghĩa thêm - custom props
  type: PropTypes.string, //Loại của form: ex: text,number,password,...
  label: PropTypes.string, // Nhãn của form: ex: Title,Tên đăng nhập, Mật Khât,bla bla
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const { field, type, label, placeholder, disabled } = props;
  // field props của fastfield luôn có 4 thuộc tính (props) mặc định là name, value, onChange và onBlur
  const { name } = field;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        {...field}

        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

export default InputField;
