import React from 'react';
import PropTypes from 'prop-types';
import './RandomPhoto.scss';
import { Button } from 'reactstrap';

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange:null,
    onRandomButtonBlur:null,
}

const getRandomImageUrl = ()=>{
    const randomId = Math.trunc(Math.random()*2000);
    return `https://picsum.photos/300/300?random=${randomId}`;
}

function RandomPhoto(props) {
    const {name,imageUrl,onImageUrlChange,onRandomButtonBlur} = props;

    const handleRandomPhotoClick = async () =>{
        if(onImageUrlChange){
            const randomImageUrl =getRandomImageUrl();
            onImageUrlChange(randomImageUrl);
        }
    }

    return (
        <div className="random-photo">
            <div className="random-photo__button">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onClick={handleRandomPhotoClick}
                    onBlur={onRandomButtonBlur}
                >
                    Random a Photo
                </Button>
            </div>

            <div className="random-photo__photo">
                {imageUrl && <img src={imageUrl} alt="oops....not found -> Plz random again"/>}
            </div>
        </div>
    );
}

export default RandomPhoto;