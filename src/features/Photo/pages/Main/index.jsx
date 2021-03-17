// import Banner from '../../../../components/Banner'
// import Images from '../../../../constants/images';
// import PhotoList from '../../components/PhotoList';

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import  Images  from 'constants/images';
import Banner from 'components/Banner';
import {useDispatch, useSelector} from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';


MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const photoList = useSelector(state => state.photos);
  const history = useHistory();

  const handleRemovePhotoClick = (photo) =>{
    // dảk
    console.log('Remove',photo);
    dispatch(removePhoto(photo.id));
  };

  const handleEditPhotoClick = (photo) =>{
    // bủh
    console.log('Edit',photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  }


  return (
    <div className="photo-main">
      <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>
        <PhotoList
          photoList={photoList}
          onPhotoRemoveClick={handleRemovePhotoClick}
          onPhotoEditClick={handleEditPhotoClick}
        />

      </Container>
    </div>
  );
}

export default MainPage;