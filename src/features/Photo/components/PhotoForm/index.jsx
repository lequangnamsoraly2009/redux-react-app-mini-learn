import PropTypes from "prop-types";
import React from "react";
import { Label, Button, FormGroup } from "reactstrap";
import Images from "constants/images";
import { Formik, Form, FastField } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import { PHOTO_CATEGORY_OPTIONS } from 'constants/globals';

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
              options= {PHOTO_CATEGORY_OPTIONS}
            />


            <FormGroup>
              <Label for="categoryId">Photo</Label>

              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  width="200px"
                  height="200px"
                  src={Images.COLORFUL_BG}
                  alt="Colorful"
                />
              </div>
            </FormGroup>

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
