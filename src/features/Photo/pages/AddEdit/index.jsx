import Banner from "components/Banner";
import PhotoForm from "../../components/PhotoForm";
import React from "react";

import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import { useHistory, useParams } from "react-router-dom";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams(); // Lấy các giá trị của Params trên URL . Nó trả về 1 object các params
  const isAddMode = !photoId;  // Kiểm tra nếu không có photoId là true và ngược lại
  // console.log(photoId);

  const editedPhoto = useSelector((state) =>
    state.photos.find((x) => x.id === +photoId)
  );

  // Khởi tạo initialValues nếu không phải edit thì initialValues có giá trị như mặc định còn nếu là edit thì lấy giá trị trong redux
  const initialValues = isAddMode
    ? {
        id: Math.trunc(Math.random()*100000),
        title: "",
        categoryId: null,
        photo: "",
      }
    : editedPhoto;
  const handleOnSubmit = (values) => {
    // console.log("form Submit:", values);
    if(isAddMode){
      dispatch(addPhoto(values));
    }
    else{
      dispatch(updatePhoto(values));
    }
    history.push("/photos"); // redirect về api '/photos'
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm isAddMode={isAddMode} initialValues={initialValues} onSubmit={handleOnSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
