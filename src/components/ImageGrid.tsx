
import { useState } from 'react';

type ImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

function ImageGrid({ images }: { images: ImageItem[] }) {
  const [activeImage, setActiveImage] = useState<ImageItem | null>(null);

  const handleOpenImage = (image: ImageItem) => {
    setActiveImage(image);
  };

  const handleCloseImage = () => {
    setActiveImage(null);
  };

  return (
    <>
      <div className="section-media-grid">
        {images.map((img) => (
          <figure className="section-image-card" key={img.src}>
            <button
              type="button"
              className="section-image-button"
              onClick={() => handleOpenImage(img)}
            >
              <img src={img.src} alt={img.alt} />
            </button>
            {img.caption && <figcaption>{img.caption}</figcaption>}
          </figure>
        ))}
      </div>

      {activeImage && (
        <div className="image-lightbox" onClick={handleCloseImage}>
          <div className="image-lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="image-lightbox-close"
              onClick={handleCloseImage}
              aria-label="Close image preview"
            >
              ×
            </button>
            <img src={activeImage.src} alt={activeImage.alt} />
            {activeImage.caption && (
              <div className="image-lightbox-caption">{activeImage.caption}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGrid;