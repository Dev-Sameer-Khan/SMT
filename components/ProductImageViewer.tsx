import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

interface ProductImageViewerProps {
  images: string[];
  productTitle: string;
}

const ProductImageViewer: React.FC<ProductImageViewerProps> = ({
  images,
  productTitle,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isZoomed, setIsZoomed] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const lightboxImageRef = useRef<HTMLDivElement>(null);

  // Use provided images or generate variations
  const productImages = images.length > 1 ? images : images;

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
    setZoomLevel(1);
    setIsZoomed(false);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : productImages.length - 1));
    setZoomLevel(1);
    setIsZoomed(false);
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev < productImages.length - 1 ? prev + 1 : 0));
    setZoomLevel(1);
    setIsZoomed(false);
  };

  const handleImageClick = () => {
    setIsLightboxOpen(true);
    setZoomLevel(1);
    setIsZoomed(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || !imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  const handleLightboxMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || !lightboxImageRef.current) return;

    const rect = lightboxImageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
    setIsZoomed(true);
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) setIsZoomed(false);
      return newZoom;
    });
  };

  const toggleZoom = () => {
    if (isZoomed) {
      setZoomLevel(1);
      setIsZoomed(false);
    } else {
      setZoomLevel(2);
      setIsZoomed(true);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === "Escape") {
        setIsLightboxOpen(false);
        setZoomLevel(1);
        setIsZoomed(false);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isLightboxOpen, selectedImageIndex]);

  // Disable body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Thumbnail Gallery - Vertical on desktop, horizontal on mobile */}
        <div className="flex lg:flex-col gap-3 order-2 lg:order-1 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px] pb-2 lg:pb-0">
          {productImages.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-lg border-2 overflow-hidden transition-all duration-300 ${
                selectedImageIndex === index
                  ? "border-blue-500 shadow-lg scale-105"
                  : "border-black/10 hover:border-blue-300"
              }`}
            >
              <img
                src={image}
                alt={`${productTitle} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Main Image Display */}
        <div className="flex-1 order-1 lg:order-2 relative group">
          <div
            ref={imageRef}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg border border-black/10 shadow-2xl bg-black/5 cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setIsZoomed(false)}
            onClick={handleImageClick}
          >
            <img
              src={productImages[selectedImageIndex]}
              alt={productTitle}
              className="w-full h-full object-contain transition-transform duration-300"
              style={{
                transform: isZoomed ? `scale(2)` : "scale(1)",
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-semibold uppercase flex items-center gap-2">
                <ZoomIn className="w-4 h-4" />
                Click to Enlarge
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Desktop */}
          {productImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-black p-3 rounded-full shadow-lg transition-all hover:scale-110 opacity-0 group-hover:opacity-100 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-black p-3 rounded-full shadow-lg transition-all hover:scale-110 opacity-0 group-hover:opacity-100 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Image Counter */}
          {productImages.length > 1 && (
            <div className="absolute bottom-[40%] max-[599px]:bottom-5 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-semibold">
              {selectedImageIndex + 1} / {productImages.length}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox/Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => {
            setIsLightboxOpen(false);
            setZoomLevel(1);
            setIsZoomed(false);
          }}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(false);
              setZoomLevel(1);
              setIsZoomed(false);
            }}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Zoom Controls */}
          <div className="absolute top-4 left-4 flex gap-2 z-50">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomIn();
              }}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-all"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomOut();
              }}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-all"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
          </div>

          {/* Main Image */}
          <div
            ref={lightboxImageRef}
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleLightboxMouseMove}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <img
              src={productImages[selectedImageIndex]}
              alt={productTitle}
              className="max-w-full max-h-full object-contain transition-transform duration-300"
              style={{
                transform: isZoomed ? `scale(${zoomLevel})` : "scale(1)",
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              }}
            />
          </div>

          {/* Navigation Arrows - Lightbox */}
          {productImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all z-50"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all z-50"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Counter - Lightbox */}
          {productImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
              {selectedImageIndex + 1} / {productImages.length}
            </div>
          )}

          {/* Instructions */}
          <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-xs">
            <div>ESC to close | ← → to navigate | +/- to zoom</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductImageViewer;
