import React from "react";
import Image from "next/image";
import Link from "next/link";

interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="w-full">
      {images.map((image) => (
        <div key={image.id} className="relative w-full h-screen">
          <div className="absolute inset-0">
            <Image
              src={image.imageUrl}
              alt={image.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-6xl md:text-8xl font-serif mb-8">
              <span className="font-normal">The Golden </span>
              <span className="font-light">{image.title}</span>
            </h2>

            <Link
              href={image.link}
              className="border border-white px-8 py-3 hover:bg-white hover:bg-opacity-20 transition-all"
            >
              DISCOVER MORE
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
