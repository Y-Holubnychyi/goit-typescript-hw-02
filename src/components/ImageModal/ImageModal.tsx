import Modal from "react-modal";
import { useEffect } from "react";
import s from "./ImageModal.module.css";
import type { UnsplashImage } from "../../services/types";

interface Props {
  image: UnsplashImage;
  onClose: () => void;
}

const ImageModal = ({ image, onClose }: Props) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Modal
      key={image.id}
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.backdrop}
      contentLabel="Image Modal"
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <button className={s.close} onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
