import { useDimension } from '../../helpers/useDimension.js';
import useImageLoader from '../../helpers/useImageLoader.js';
import { useSwipe } from '../../helpers/useSwipe.js';
import { ImageGalleryService } from '../../services';
import ImageMagnifier from '../ImageMagnifier';
import Loader from '../Loader/Loader.jsx';
import Modal from '../Modal';
import { ImageGalleryWrapper, LightBoxWrapper } from './styles';

const COUNT_IMAGES_TO_DISPLAY = 28;

const ImageGallery = () => {
  const { imageLoading = false, images = [] } = useImageLoader();
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe();
  const { isTablet = false } = useDimension();

  const imageGalleryService = new ImageGalleryService(images, isTablet);

  if (imageLoading) {
    return <Loader />;
  }

  return (
    <>
      <ImageGalleryWrapper className="gallery">
        {images.slice(0, COUNT_IMAGES_TO_DISPLAY).map((image, index) => (
          <figure
            key={`${image + index}`}
            className={imageGalleryService.galleryImageClasses(index)}
            onClick={() => imageGalleryService.showImage(image)}
          >
            <img alt={image.alt} className="gallery__img" src={image.src} />
          </figure>
        ))}
      </ImageGalleryWrapper>

      {imageGalleryService.lightboxDisplay && (
        <>
          <Modal
            isOpen={imageGalleryService.lightboxDisplay}
            modalId="lightbox-modal"
            onClose={imageGalleryService.hideLightBox}
            showNext={!isTablet && ((e) => imageGalleryService.showNext(e))}
            showPrev={!isTablet && ((e) => imageGalleryService.showPrev(e))}
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
