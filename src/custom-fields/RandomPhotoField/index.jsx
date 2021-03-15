import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';
import { ErrorMessage } from 'formik';
import { FormFeedback } from 'reactstrap';

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
    label: '',
}

function RandomPhotoField(props) {

    const {field , form , label} = props;
    const {name,value,onBlur} = field;

    // Show Error Validates
    const {errors,touched} = form;
    const showError = errors[name] && touched[name];

    const handleImageUrlChange = (newImageUrl) =>{
        form.setFieldValue(name,newImageUrl);
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <RandomPhoto
                name = {name}
                imageUrl = {value}
                onImageUrlChange = {handleImageUrlChange}
                onRandomButtonBlur = {onBlur}

                // Vì RandomPhoto là 1 component do ta tự define nên ta cần có className="is-invalid" nhưng component RandomPhoto không support ClassName
                // Vì vậy ta config thuộc tính className trong RandomPhoto 
            />
            {/* Cách cheat nếu không muốn hỗ trợ className trong custom Components */}
            <div className={showError ? 'is-invalid' : ''}></div>
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default RandomPhotoField;