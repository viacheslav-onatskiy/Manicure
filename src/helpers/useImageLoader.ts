import { useEffect, useState } from 'react';

interface ImageData {
  src: string;
  alt: string;
  id: number;
}

interface ImageLoaderResult {
  imageLoading: boolean;
  images: ImageData[];
}

function useImageLoader(): ImageLoaderResult {
  const [imageLoading, setImageLoading] = useState(true);
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    async function importImages() {
      try {
        const imagesContext = require.context(
          '../images/portfolio',
          false,
          /\.(png|jpe?g|JPG|svg)$/
        );
        const imagePromises = imagesContext
          .keys()
          .map(imagesContext)
          .map((image, index) => ({
            src: image as string,
            alt: `image${index}`,
            id: index
          }))
          .sort();

        const loadedImages = await Promise.all(imagePromises);
        setImages(loadedImages);
        setImageLoading(false);
      } catch (error) {
        setImageLoading(false);
      }
    }

    importImages();
  }, []);

  return { imageLoading, images };
}

export default useImageLoader;
