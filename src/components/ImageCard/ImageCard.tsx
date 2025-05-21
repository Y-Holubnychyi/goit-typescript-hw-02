import type { UnsplashImage } from "../../services/types";
import s from "./ImageCard.module.css";

interface Props {
  image: UnsplashImage;
  onImageClick: (image: UnsplashImage) => void;
}

function ImageCard({ image, onImageClick }: Props) {
  return (
    <div className={s.card} onClick={() => onImageClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.image}
      />
    </div>
  );
}

export default ImageCard;
