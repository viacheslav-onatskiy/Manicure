import { motion } from 'framer-motion';
import { ChangeEvent, useEffect } from 'react';
import { useDimension } from '../../helpers/useDimension';
import useImageLoader from '../../helpers/useImageLoader';
import { useSwipe } from '../../helpers/useSwipe';
import { ImageGalleryService } from '../../services';
import ImageMagnifier from '../ImageMagnifier';
import Loader from '../Loader';
import Modal from '../Modal';
import { ImageGalleryWrapper, LightBoxWrapper } from './styles';

const COUNT_IMAGES_TO_DISPLAY = 28;

const ImageGallery = () => {
  const { imageLoading = false, images = [] } = useImageLoader();
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe();
  const { isTablet = false } = useDimension();
  const min = 100;
  const max = 350;
  const randomNumberInRange = Math.floor(Math.random() * (max - min + 1)) + min;

  const imageGalleryService = new ImageGalleryService(images, isTablet);

  useEffect(() => {
    if (imageLoading) {
      <Loader />;
      return;
    }
  }, [imageLoading]);

  return (
    <>
      <ImageGalleryWrapper className="gallery">
        {images.slice(0, COUNT_IMAGES_TO_DISPLAY).map((image, index) => (
          <motion.div
            initial={{ x: randomNumberInRange, opacity: 0 }}
            animate={{ x: [0], opacity: [1] }}
            transition={{
              duration: 0.5,
              delay: (Math.floor(Math.random() * 10) + 1) / 10
            }}
            // key={`${image + index}`}
            key={`${index}`}
            className={imageGalleryService.galleryImageClasses(index)}
            onClick={() => imageGalleryService.showImage(image)}
          >
            <img alt={image.alt} className="gallery__img" src={image.src} />
          </motion.div>
        ))}
      </ImageGalleryWrapper>

      {imageGalleryService.lightboxDisplay && (
        <>
          <Modal
            isOpen={imageGalleryService.lightboxDisplay}
            modalId="lightbox-modal"
            onClose={imageGalleryService.hideLightBox}
            showNext={
              !isTablet
                ? (e) => imageGalleryService.showNext(e as ChangeEvent<HTMLElement>)
                : undefined
            }
            showPrev={
              !isTablet
                ? (e) => imageGalleryService.showPrev(e as ChangeEvent<HTMLElement>)
                : undefined
            }
            hasCloseBtn={!isTablet}
          >
            <LightBoxWrapper
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={(e) =>
                onTouchEnd(e, imageGalleryService.showNext, imageGalleryService.showPrev)
              }
            >
              <ImageMagnifier
                alt={imageGalleryService.imageToShow?.alt}
                className="gallery__img"
                src={imageGalleryService.imageToShow?.src}
              />
            </LightBoxWrapper>
          </Modal>
        </>
      )}
    </>
  );
};

export default ImageGallery;
