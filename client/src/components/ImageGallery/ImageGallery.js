import { useState } from 'react';
import Modal from '../Modal';
import { ImageGalleryWrapper, LightBoxWrapper } from './styles';
import { useSwipe } from '../../helpers/useSwipe.js';
import ImageMagnifier from '../ImageMagnifier/ImageMagnifier.js';
import { useDimension } from '../../helpers/useDimension.js';

export const images = [
  {
    imageUrl: '../../images/IMG_6796.jpeg',
    alt: 'imaaage 1'
  },
  {
    imageUrl: '../../images/IMG_0474.jpeg',
    alt: 'imaaage 2'
  },
  {
    imageUrl: '../../images/IMG_7720.jpeg',
    alt: 'imaaage 3'
  },
  {
    imageUrl: '../../images/IMG_7952.jpeg',
    alt: 'imaaage 4'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    alt: 'imaaage 5'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    alt: 'imaaage 6'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1447684808650-354ae64db5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    alt: 'imaaage 7'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80',
    alt: 'imaaage 8'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2301&q=80',
    alt: 'imaaage 9'
  },
  {
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5ed6f1a4cb812c491eee5621/1596254002376-PL41RX8DZ1YKTQEMCGNW/image-asset.jpeg?format=1500w',
    alt: 'imaaage 10'
  },

  {
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5ed6f1a4cb812c491eee5621/1630076213771-VF3VI6TG4QZ84S8EK1V5/IMG_6135.JPG?format=1500w',
    alt: 'imaaage 11'
  },
  {
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5ed6f1a4cb812c491eee5621/1630075435051-16NSTOCW1I993DK2AYP4/VOESH-PHOTO-PediInABoxDeluxe4Step-LavenderRelieve-IngredientCue-200817-Square_v2_600x%402x.jpg?format=1500w',
    alt: 'imaaage 12'
  },
  {
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5ed6f1a4cb812c491eee5621/1630074691776-G1LFUC5KTJ2082W2C2B9/AtFirstBlush_System_1024x1024%402x.jpg?format=1500w',
    alt: 'imaaage 13'
  },
  {
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5ed6f1a4cb812c491eee5621/1595277462785-A3HM8WTMDU5D73LBZDFJ/IMG_3425.jpg?format=1500w',
    alt: 'imaaage 14'
  },
  {
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5ed6f1a4cb812c491eee5621/1659985258981-LO8DEZBROA9E6TF4CMVH/zola1-1658944548.jpg?format=750w',
    alt: 'imaaage 15'
  },
  {
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5ed6f1a4cb812c491eee5621/1631212531070-B129B3JKFZTE939A8GKR/sheer+collection.PNG?format=750w',
    alt: 'imaaage 16'
  },
  {
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5ed6f1a4cb812c491eee5621/1698632930899-V7FP8LV7VZG4AVRR5M61/image-asset.jpeg?format=500w',
    alt: 'imaaage 17'
  },
  {
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/5ed6f1a4cb812c491eee5621/1695914951350-JBODU8OZ2TYX9YQI66KH/image-asset.jpeg?format=500w',
    alt: 'imaaage 18'
  },
  {
    imageUrl: '../../images/IMG_0474.jpeg',
    alt: 'imaaage 19'
  },

  {
    imageUrl: '../../images/IMG_6796.jpeg',
    alt: 'imaaage 20'
  },
  {
    imageUrl: '../../images/IMG_6796.jpeg',
    alt: 'imaaage 21'
  },
  {
    imageUrl: '../../images/IMG_0474.jpeg',
    alt: 'imaaage 22'
  },
  {
    imageUrl: '../../images/IMG_6796.jpeg',
    alt: 'imaaage 23'
  },
  {
    imageUrl: '../../images/IMG_0474.jpeg',
    alt: 'imaaage 24'
  },
  {
    imageUrl: '../../images/IMG_7952.jpeg',
    alt: 'imaaage 25'
  },
  {
    imageUrl: '../../images/IMG_6796.jpeg',
    alt: 'imaaage 26'
  },
  {
    imageUrl: '../../images/IMG_6796.jpeg',
    alt: 'imaaage 27'
  },
  {
    imageUrl: '../../images/IMG_0474.jpeg',
    alt: 'imaaage 28'
  }
];

const ImageGallery = () => {
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe();
  const { isTablet } = useDimension();

  const [imageToShow, setImageToShow] = useState(undefined);
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const showNext = (e) => {
    e?.stopPropagation();
    const currentIndex = images.findIndex(
      (image) => image.imageUrl === imageToShow.imageUrl
    );

    if (currentIndex >= images.length - 1) {
      setImageToShow(images[0]);
    } else {
      const nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e?.stopPropagation();
    const currentIndex = images.findIndex(
      (image) => image.imageUrl === imageToShow.imageUrl
    );

    if (currentIndex <= 0) {
      setImageToShow(images[images.length - 1]);
    } else {
      const nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const galleryImageClasses = (index) => {
    const positionClass = !isTablet ? (index % 2 === 0 ? 'from-left' : 'from-right') : '';
    const itemNumberClass = `gallery__item--${index + 1}`;

    return `gallery__item ${positionClass} ${itemNumberClass}`;
  };

  return (
    <>
      <ImageGalleryWrapper className="gallery">
        {images.map((image, index) => (
          <figure
            key={`${image.alt + index}`}
            className={galleryImageClasses(index)}
            onClick={() => showImage(image)}
          >
            <img alt={image.alt} className="gallery__img" src={image.imageUrl} />
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
                src={imageToShow.imageUrl}
              />
            </LightBoxWrapper>
          </Modal>
        </>
      )}
    </>
  );
};

export default ImageGallery;
