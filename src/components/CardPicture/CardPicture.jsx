import s from "./style.module.css";

const CardPicture = ({ urlImg, cardName }) => (
  <>
    <figure className={s.figImg}>
      <img className={s.imgCard} alt={cardName} src={urlImg} />
    </figure>
  </>
);

export default CardPicture;
