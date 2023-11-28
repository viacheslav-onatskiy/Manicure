import { useState } from 'react';
import { ImageMagnifierImage, ImageMagnifierWrapper } from './styles';

function ImageMagnifier({
  src = '',
  alt = 'image',
  magnifierHeight = 120,
  magnifierWidth = 120,
  zoomLevel = 1.5
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const onMouseEnter = (e) => {
    // update image size and turn-on magnifier
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const onMouseMove = (e) => {
    // update cursor position
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();

    // calculate cursor position on the image
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setXY([x, y]);
  };

  return (
    <ImageMagnifierWrapper>
      <ImageMagnifierImage
        src={src}
        className="gallery__img"
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        alt={alt}
      />

      {showMagnifier && (
        <div
          style={{
            display: showMagnifier ? '' : 'none',
            position: 'absolute',

            // prevent magnifier blocks the mousemove event of img
            pointerEvents: 'none',
            // set size of magnifier
            height: `${magnifierHeight}px`,
            width: `${magnifierWidth}px`,
            // move element center to cursor pos
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifierWidth / 2}px`,
            opacity: '1',
            border: '1px solid lightgray',
            backgroundColor: 'transparent',
            backgroundImage: `url('${src}')`,
            backgroundRepeat: 'no-repeat',
            borderRadius: '5px',
            boxShadow: '8px 8px 11px 1px rgba(0,0,0,0.5)',

            //calculate zoomed image size
            backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,

            //calculate position of zoomed image.
            backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
          }}
        />
      )}
    </ImageMagnifierWrapper>
  );
}

export default ImageMagnifier;
