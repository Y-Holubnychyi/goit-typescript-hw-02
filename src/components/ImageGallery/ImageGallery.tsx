import type { UnsplashImage } from "../../services/types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface Props {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}

function ImageGallery({ images, onImageClick }: Props) {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
