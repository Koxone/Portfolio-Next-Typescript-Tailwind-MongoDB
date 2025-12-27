'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

type ShowCaseProps = {
  alt: string;
  src: string;
  gallery: string;
  slideshow: string;
  srcSlide: string;
  imgNumber: number;
};

function ShowCase({ alt, src, gallery, slideshow, srcSlide, imgNumber }: ShowCaseProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = Array.from({ length: imgNumber }, (_, i) => `/${srcSlide}/${i + 1}.webp`);

  const openSlideshow = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeSlideshow = () => setIsOpen(false);

  const prevImage = useCallback(
    () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)),
    [images.length]
  );

  const nextImage = useCallback(
    () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeSlideshow();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, prevImage, nextImage]);

  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov');

  return (
    <>
      {/* Main Image/Video */}
      <div className="relative flex flex-col gap-4">
        <div
          className="relative aspect-video cursor-pointer overflow-hidden rounded-3xl border border-orange-400/50 shadow-2xl backdrop-blur-lg"
          onClick={() => openSlideshow(0)}
        >
          {isVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              src={src}
              className="h-full w-full object-cover transition-all duration-300 ease-in-out hover:scale-105"
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="transition-all duration-300 ease-in-out hover:scale-105"
            />
          )}
        </div>
        <div className="self-center text-center">
          <p className="text-xl leading-tight font-bold tracking-tight text-white lg:text-3xl">
            {gallery}
          </p>
          <p className="self-center text-sm text-gray-400">{slideshow}</p>
        </div>
      </div>

      {/* Slideshow */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeSlideshow}
        >
          <button
            className="absolute top-6 right-6 cursor-pointer text-3xl font-bold text-white"
            onClick={closeSlideshow}
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 cursor-pointer text-4xl font-bold text-white"
          >
            <ChevronLeft />
          </button>

          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            width={1200}
            height={800}
            sizes="80vw"
            style={{ objectFit: 'contain' }}
            className="max-h-[80vh] max-w-[80vw] cursor-zoom-in rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 cursor-pointer text-4xl font-bold text-white"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </>
  );
}

export default ShowCase;
