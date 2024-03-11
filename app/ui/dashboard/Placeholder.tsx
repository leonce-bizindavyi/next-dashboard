"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function ImagePlaceholder({ src, alt, width, height }: ImagePlaceholderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setIsLoading(false);
    image.src = src;

    return () => {
      // Clean up function to prevent memory leaks
      image.onload = null;
    };
  }, [src]);

  return (
    <div style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {isLoading ? (
        <div style={{ backgroundColor: '#ccc', width: '50%', height: '50%' }} /> // Custom placeholder while loading
      ) : (
        <Image src={src} alt={alt} width={width} height={height} />
      )}
    </div>
  );
}

export default ImagePlaceholder;
