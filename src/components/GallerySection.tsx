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
          <Image
            src={image.imageUrl}
            alt={image.title}
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-black/40">
            <h2 className="text-6xl md:text-8xl font-serif mb-8">
              <span className="font-abt-bold text-5xl">The Golden </span>
              <span className="font-light">{image.title}</span>
            </h2>

            <Link
              href={image.link}
              className="bg-transparent text-white px-6 py-3 text-sm uppercase tracking-wider border border-white hover:bg-black hover:text-white hover:border-black transition-colors duration-1000 font-montserrat"
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
