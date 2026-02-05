import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ImageGallery Component with Lightbox
 * @param {Array} images - Array of image objects {src, alt, category}
 * @param {String} layout - 'masonry' or 'grid' (default: masonry)
 */
const ImageGallery = ({ images = [], layout = 'masonry' }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Listen for keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [lightboxOpen, currentIndex]);

  const getGridClasses = () => {
    if (layout === 'grid') {
      return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
    }
    return 'columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4';
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className={getGridClasses()}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer overflow-hidden group ${
              layout === 'masonry' ? 'break-inside-avoid' : 'aspect-square'
            }`}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-20"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-accent-400 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              className="absolute left-6 text-white hover:text-accent-400 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
            >
              <ChevronLeft size={48} />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              className="absolute right-6 text-white hover:text-accent-400 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight size={48} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
