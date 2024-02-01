import ImageGalleryService from './ImageGalleryService';

describe('ImageGalleryService', () => {
  it('should show an image and set lightbox display to true', () => {
    const service = new ImageGalleryService([], false);
    const image = { src: 'example.jpg' };

    service.showImage(image);

    expect(service.imageToShow).toEqual(image);
    expect(service.lightboxDisplay).toBe(true);
  });

  it('should hide the lightbox and set lightbox display to false', () => {
    const service = new ImageGalleryService([], false);

    service.hideLightBox();

    expect(service.lightboxDisplay).toBe(false);
  });

  it('should show the next image', () => {
    const images = [{ src: 'image1.jpg' }, { src: 'image2.jpg' }, { src: 'image3.jpg' }];
    const service = new ImageGalleryService(images, false);

    service.showImage(images[0]);
    service.showNext();

    expect(service.imageToShow).toEqual(images[1]);
  });

  it('should show the previous image', () => {
    const images = [{ src: 'image1.jpg' }, { src: 'image2.jpg' }, { src: 'image3.jpg' }];
    const service = new ImageGalleryService(images, false);

    service.showImage(images[1]);
    service.showPrev();

    expect(service.imageToShow).toEqual(images[0]);
  });

  it('should return the correct gallery image classes', () => {
    const service = new ImageGalleryService([], false);

    const classes = service.galleryImageClasses(2);

    expect(classes).toContain('gallery__item--3'); // 2 + 1
  });

  it('should return correct gallery image classes for laptop', () => {
    const service = new ImageGalleryService([], false);

    const classes = service.galleryImageClasses(1);

    expect(classes).toContain('gallery__item--2');
    expect(classes).toContain('from-right');
  });

  it('should return correct gallery image classes ("from-left") for laptop if image index = 2', () => {
    const service = new ImageGalleryService([], false);

    const classes = service.galleryImageClasses(2);

    expect(classes).toContain('gallery__item--3');
    expect(classes).toContain('from-left');
  });

  it('should not contain "from-right" and "from-left" classes for tablet', () => {
    const service = new ImageGalleryService([], true);

    const classes = service.galleryImageClasses(1);

    expect(classes).not.toContain('from-right');
    expect(classes).not.toContain('from-left');
  });
});
