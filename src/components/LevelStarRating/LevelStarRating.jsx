import { ICON_CARD_EXTERNAL_URL } from "../../config";
import s from "./style.module.css";

const LevelStarRating = ({ levelStarRating, levelLinkRating }) => {
  const starLevel = [];
  if (levelStarRating > 0) {
    for (let i = 1; i <= levelStarRating; i++) {
      starLevel.push(
        <img
          className={s.starLevel}
          alt={i}
          src={ICON_CARD_EXTERNAL_URL + "icon_level.png"}
          key={i}
        />
      );
    }
  }
  if (levelLinkRating > 0) {
    starLevel.push("LINK-" + levelLinkRating);
  }

  return <div>{starLevel}</div>;
};

export default LevelStarRating;
