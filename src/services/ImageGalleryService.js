import { useState } from 'react';

const ImageGalleryService = (images, isTablet) => {
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState(null);

  const showImage = (image) => {
    setImageToShow(image);
    setLightboxDisplay(true);
  };

  const hideLightBox = () => {
    setLightboxDisplay(false);
  };

  const showNext = (e) => {
    e?.stopPropagation();
    const currentIndex = images.findIndex((image) => image.src === imageToShow.src);

    if (currentIndex >= images.length - 1) {
      setImageToShow(images[0]);
    } else {
      const nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e?.stopPropagation();
    const currentIndex = images.findIndex((image) => image.src === imageToShow.src);

    if (currentIndex <= 0) {
      setImageToShow(images[images.length - 1]);
    } else {
      const prevImage = images[currentIndex - 1];
      setImageToShow(prevImage);
    }
  };

  const galleryImageClasses = (index) => {
    let positionClass = '';

    if (!isTablet && index <= 11) {
      if (index % 2 === 0) {
        positionClass = 'from-left';
      } else {
        positionClass = 'from-right';
      }
    }

    const itemNumberClass = `gallery__item--${index + 1}`;

    return `gallery__item ${positionClass} ${itemNumberClass}`;
  };

  return {
    showImage,
    hideLightBox,
    showNext,
    showPrev,
    galleryImageClasses,
    imageToShow,
    get lightboxDisplay() {
      return lightboxDisplay;
    }
  };
};

export default ImageGalleryService;
