import CardGameListItem from "../CardGameListItem/CardGameListItem";
import s from "./style.module.css";

const CardGameList = ({ onClickItem, cardGameList }) => (
  <>
    <div className={s.title}>Top 7 View Ranking of Month:</div>
    <div className={s.list}>
      {cardGameList.map((cardGame) => {
        return (
          <span key={cardGame.id} className={s.showItem}>
            <CardGameListItem cardGame={cardGame} onClick={onClickItem} />
          </span>
        );
      })}
    </div>
  </>
);

export default CardGameList;
