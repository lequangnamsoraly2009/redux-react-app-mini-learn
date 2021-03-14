import { PHOTO_CATEGORY_OPTIONS } from 'constants/globals';
import PropTypes from 'prop-types';
import React from 'react';
import { Form,Input,Label, Button, FormGroup } from 'reactstrap';
import Select from 'react-select';
import Images from 'constants/images'


PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  // npm i --save react-select
  return (
   
      <Form>
        <FormGroup>
            <Label for="titleId">Title</Label>
            <Input name="title" id="titleId" placeholder="Eg: Nature"/>
        </FormGroup>

        <FormGroup>
            <Label for="categoryId">Category</Label>
            <Select name="categoryId" id="categoryId" placeholder="What's your photo category" options={PHOTO_CATEGORY_OPTIONS}/>
        </FormGroup>

        <FormGroup>
            <Label for="categoryId">Photo</Label>

            <div>
                <Button type="button" outline color="primary">Random a photo</Button>   
            </div>
            <div>
                <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="Colorful"/>
            </div>
        </FormGroup>

        <FormGroup>
            <Button color="primary">Add to album</Button>
        </FormGroup>
    </Form>
    
  );
}

export default PhotoForm;