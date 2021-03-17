import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import PhotoCard from "../PhotoCard"

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoRemoveClick: PropTypes.func,
  onPhotoEditClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photoList: [],
  onPhotoRemoveClick: null,
  onPhotoEditClick: null,
};

function PhotoList(props) {
  const { onPhotoRemoveClick, onPhotoEditClick, photoList } = props;

  return (
    <Row>
      {photoList.map((photo) => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
