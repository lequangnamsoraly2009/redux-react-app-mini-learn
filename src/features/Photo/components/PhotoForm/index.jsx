import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup } from "reactstrap";
// import Images from "constants/images";
import { Formik, Form, FastField } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import { PHOTO_CATEGORY_OPTIONS } from "constants/globals";
import RandomPhotoField from "custom-fields/RandomPhotoField";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  // npm i --save react-select
  const initialValues = {
    title: "",
    categoryId: null,
    // photo: "",
  };
  return (
    <Formik initialValues={initialValues}>
      {(formikProps) => {
        // Xử lý các props của form tại đây:
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        // return UI form
        return (
          <Form>
            {/* Nếu các Field không phụ thuộc lẫn nhau thì sử dụng FastField - Ngược lại thì dùng Field*/}
            <FastField
              // Props của fastfield
              name="title"
              component={InputField}
              // Props được truyền vào InputField
              label="Title"
              placeholder="Eg: Nature"
            />

            <FastField
              // Props của fastfield
              name="categoryId"
              component={SelectField}
              // Props được truyền vào InputField
              label="Category"
              placeholder="What's your photo category"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
