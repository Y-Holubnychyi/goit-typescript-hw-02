import s from "./LoadMoreBtn.module.css";

interface Props {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: Props) => {
  return (
    <div className={s.wrapper}>
      <button onClick={onClick} className={s.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
