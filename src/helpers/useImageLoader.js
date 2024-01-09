import { useEffect, useState } from 'react';

function useImageLoader() {
  const [imageLoading, setImageLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function importImages() {
      try {
        const imagesContext = require.context(
          '../images/portfolio',
          false,
          /\.(png|jpe?g|JPG|svg)$/
        );
        const imagePromises = await imagesContext
          .keys()
          .map(imagesContext)
          .map((image, index) => ({
            src: image,
            alt: `image${index}`,
            id: index
          }))
          .sort();

        const loadedImages = await Promise.all(imagePromises);
        setImages(loadedImages);
        setImageLoading(false);
      } catch (error) {
        console.error('Image loading error:', error);
        setImageLoading(false);
      }
    }

    importImages();
  }, []);

  return { imageLoading, images };
}

export default useImageLoader;
