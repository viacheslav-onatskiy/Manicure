class ImageGalleryService {
  constructor(images, isTablet) {
    this.images = images;
    this.isTablet = isTablet;
    this.lightboxDisplay = false;
    this.imageToShow = null;
  }

  showImage = (image) => {
    this.imageToShow = image;
    this.lightboxDisplay = true;
  };

  hideLightBox = () => {
    this.lightboxDisplay = false;
  };

  showNext = (e) => {
    e?.stopPropagation();
    const currentIndex = this.images.findIndex(
      (image) => image.src === this.imageToShow.src
    );

    if (currentIndex >= this.images.length - 1) {
      this.imageToShow = this.images[0];
    } else {
      const nextImage = this.images[currentIndex + 1];
      this.imageToShow = nextImage;
    }
  };

  showPrev = (e) => {
    e?.stopPropagation();
    const currentIndex = this.images.findIndex(
      (image) => image.src === this.imageToShow.src
    );

    if (currentIndex <= 0) {
      this.imageToShow = this.images[this.images.length - 1];
    } else {
      const prevImage = this.images[currentIndex - 1];
      this.imageToShow = prevImage;
    }
  };

  galleryImageClasses = (index) => {
    let positionClass = '';

    if (!this.isTablet && index <= 11) {
      if (index % 2 === 0) {
        positionClass = 'from-left';
      } else {
        positionClass = 'from-right';
      }
    }

    const itemNumberClass = `gallery__item--${index + 1}`;

    return `gallery__item ${positionClass} ${itemNumberClass}`;
  };
}

export default ImageGalleryService;
