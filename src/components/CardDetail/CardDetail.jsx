import LevelStarRating from "../LevelStarRating/LevelStarRating";
import { ICON_CARD_URL, ICON_CARD_EXTERNAL_URL } from "../../config";
import s from "./style.module.css";

const CardDetail = ({ cardGame }) => {
  return (
    <div className={s.cardTextSet}>
      <div className={s.cardText}>
        <div className={s.frameItem}>
          <div className={s.itemBox}>
            <span className={s.boxTitle}>Type Card</span>
            <span className={s.boxValue}>
              {cardGame.type}
              <img
                className={s.iconBox}
                src={ICON_CARD_URL + cardGame.type + ".jpg"}
              />
            </span>
          </div>
          <div className={s.itemBox}>
            <span className={s.boxTitle}>Level</span>
            <span className={s.boxValue}>
              {cardGame.level || cardGame.linkval ? (
                <LevelStarRating
                  levelStarRating={cardGame.level}
                  levelLinkRating={cardGame.linkval}
                />
              ) : (
                "N/A"
              )}
            </span>
          </div>
        </div>
        <div className={s.frameItem}>
          <div className={s.itemBox}>
            <span className={s.boxTitle}>Attribute</span>
            <span className={s.boxValue}>
              {cardGame.attribute}
              {cardGame.attribute ? (
                <img
                  className={s.iconBox}
                  src={
                    ICON_CARD_EXTERNAL_URL +
                    "attribute/attribute_icon_" +
                    cardGame.attribute.toLowerCase() +
                    ".png"
                  }
                />
              ) : cardGame.type.substring(0, 5).trim().toLowerCase() ===
                "trap" ? (
                <span>
                  TRAP
                  <img
                    className={s.iconBox}
                    src={
                      ICON_CARD_EXTERNAL_URL +
                      "attribute/attribute_icon_" +
                      cardGame.type.substring(0, 5).trim().toLowerCase() +
                      ".png"
                    }
                  />
                </span>
              ) : (
                <span>
                  SPELL
                  <img
                    className={s.iconBox}
                    src={
                      ICON_CARD_EXTERNAL_URL +
                      "attribute/attribute_icon_" +
                      cardGame.type.substring(0, 5).trim().toLowerCase() +
                      ".png"
                    }
                  />
                </span>
              )}
            </span>
          </div>
          <div className={s.itemBox}>
            <span className={s.boxTitle}>Race or Typing</span>
            <span className={s.boxValue}>
              {cardGame.race}
              <img
                className={s.iconBox}
                src={ICON_CARD_URL + "race/" + cardGame.race + ".png"}
              />
            </span>
          </div>
        </div>
        <div className={s.frameItem}>
          <div className={s.itemBox}>
            <span className={s.boxTitle}>ATK</span>
            <span className={s.boxValue}>
              {cardGame.atk ? cardGame.atk : "0"}
            </span>
          </div>
          <div className={s.itemBox}>
            <span className={s.boxTitle}>DEF</span>
            <span className={s.boxValue}>
              {cardGame.def ? cardGame.def : "0"}
            </span>
          </div>
        </div>
      </div>
      <div className={s.boxDescription}>
        <p>{cardGame.desc}</p>
      </div>
    </div>
  );
};

export default CardDetail;
