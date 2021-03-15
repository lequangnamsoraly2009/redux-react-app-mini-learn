import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, FormFeedback} from "reactstrap";
import { ErrorMessage } from "formik";

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
  const { field,form, type, label, placeholder, disabled } = props;
  // field props của fastfield luôn có 4 thuộc tính (props) mặc định là name, value, onChange và onBlur
  const { name } = field;
  // Khởi tạo lỗi nếu errors và touched ở form,
  const {errors,touched} = form;
  const showError = errors[name] && touched[name]; 
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        {...field}

        type={type}
        disabled={disabled}
        placeholder={placeholder}
        // FormFeedback cần isInvalid khi nó true. Input có support cho invalid
        invalid = {showError}
      />
      {/* Có 3 cách để show errors */}
      {/* {showError && <p>{errors[name]}</p>} */}
      {/* {showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
     
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default InputField;
