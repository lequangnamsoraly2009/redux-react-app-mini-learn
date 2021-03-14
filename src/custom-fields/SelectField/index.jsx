import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label } from "reactstrap";
import Select  from "react-select";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  type: "select",
  disabled: false,
  label: "",
  placeholder: "",
  options: [],
};

function SelectField(props) {
  const { field, type, disabled, options, label, placeholder } = props;
  const { name,value} = field;
  const selectedOption = options.find(option => 
      option.value === value
  )

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;
    // Fake event target
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        type={type}
        placeholder={placeholder}
        options={options}
        isDisabled={disabled}
      />
    </FormGroup>
  );
}

export default SelectField;
