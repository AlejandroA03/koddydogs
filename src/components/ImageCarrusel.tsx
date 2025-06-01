"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImageCarouselProps {
  images: StaticImageData[];
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className={className}>
      {" "}
      <Image
        src={images[currentIndex].src}
        alt={`Imagen ${currentIndex + 1}`}
        width={180}
        height={180}
      />
    </div>
  );
};

export default ImageCarousel;
