import { ICON_CARD_URL } from "../../config";
import s from "./style.module.css";

const CardGameListItem = ({ onClick, cardGame }) => {
  const onClick_ = () => {
    onClick(cardGame);
  };

  return (
    <div onClick={onClick_} className={s.container}>
      <img
        alt={cardGame.name}
        src={cardGame.card_images[0].image_url_cropped}
        className={s.img}
      />
      <div className={s.title}>
        <img
          alt={cardGame.id}
          src={ICON_CARD_URL + cardGame.type + ".jpg"}
          className={s.imgType}
        />
        {cardGame.name}
      </div>
    </div>
  );
};

export default CardGameListItem;
