import { useState } from 'react';
import Modal from '../Modal';
import { ImageGalleryWrapper, LightBoxWrapper } from './styles';
import { useSwipe } from '../../helpers/useSwipe.js';
import ImageMagnifier from '../ImageMagnifier/ImageMagnifier.js';
import { useDimension } from '../../helpers/useDimension.js';
import useImageLoader from '../../helpers/useImageLoader.js';
import Loader from '../Loader/Loader.jsx';

const ImageGallery = () => {
  const { imageLoading, images } = useImageLoader();
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe();
  const { isTablet } = useDimension();

  const [imageToShow, setImageToShow] = useState(undefined);
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  if (imageLoading) {
    return <Loader />;
  }

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
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
      const nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
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

  return (
    <>
      <ImageGalleryWrapper className="gallery">
        {images.slice(0, 28).map((image, index) => (
          <figure
            key={`${image + index}`}
            className={galleryImageClasses(index)}
            onClick={() => showImage(image)}
          >
            <img alt={image.alt} className="gallery__img" src={image.src} />
          </figure>
        ))}
      </ImageGalleryWrapper>

      {lightboxDisplay && (
        <>
          <Modal
            isOpen={lightboxDisplay}
            modalId="lightbox-modal"
            onClose={hideLightBox}
            showNext={!isTablet && showNext}
            showPrev={!isTablet && showPrev}
            hasCloseBtn={!isTablet}
          >
            <LightBoxWrapper
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={(e) => onTouchEnd(e, showNext, showPrev)}
            >
              <ImageMagnifier
                alt={imageToShow.alt}
                className="gallery__img"
                src={imageToShow.src}
              />
            </LightBoxWrapper>
          </Modal>
        </>
      )}
    </>
  );
};

export default ImageGallery;
