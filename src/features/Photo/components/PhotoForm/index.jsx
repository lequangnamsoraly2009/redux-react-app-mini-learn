import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup } from "reactstrap";
// import Images from "constants/images";
import { Formik, Form, FastField } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import { PHOTO_CATEGORY_OPTIONS } from "constants/globals";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import * as Yup from  'yup';

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
    photo: "",
  };

  // Define schema yup dùng để validate object values khi submit của form : Yea Yeah :v
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),
    // categoryId khai báo là null nên Yup không hiểu nó có định dạng là gì nên cần add thêm func nullable để yup hiểu nó là number được định nghĩa
    categoryId: Yup.number().required('This field is required').nullable(),
    // Khi ta muốn thằng categoryId được chọn là trường Technology thì thằng Photo mới cần required còn các trường khác thì có thể không cần photo
    // Hướng giải quyết:
    // Khi thằng categoryId có (is: 1) giá trị là 1 thì (then) cần required thằng photo , còn nếu không (otherwise) thì không cần required
    // Amazing goodjob Yup :v
    photo: Yup.string().when('categoryId',{
      is: 1,
      then: Yup.string().required('This field is required'),
      otherwise: Yup.string().notRequired(),
    })
  });


  return (
    <Formik
      initialValues={initialValues}
      validationSchema = {validationSchema}
      onSubmit={values => console.log('SUbmit:', values)}  
    >
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
