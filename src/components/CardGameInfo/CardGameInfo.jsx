import CardDetail from "../CardDetail/CardDetail";
import CardPicture from "../CardPicture/CardPicture";
import s from "./style.module.css";

const CardGameInfo = ({ cardGame }) => (
  <div className={s.cardSet}>
    <div className={s.cardName}>
      <h2 className={s.cardTitle}>{cardGame.name}</h2>
    </div>
    <div className={s.cardInfo}>
      <CardPicture
        urlImg={cardGame.card_images[0].image_url}
        cardName={cardGame.name}
      />
      <CardDetail cardGame={cardGame} />
    </div>
  </div>
);

export default CardGameInfo;
