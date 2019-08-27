import React from 'react';
import ImageCard from './ImageCard.js';

const ImageList = props => {
  const images = props.images
    .filter(image => image.imageUrl !== undefined)
    .map(image => {
      return <ImageCard key={image.multiverseid} image={image} />;
    });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
