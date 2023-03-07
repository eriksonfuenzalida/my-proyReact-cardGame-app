import { useState, useEffect, useCallback, useMemo } from "react";
import Header from "./components/Header/Header";
import SearchBarCard from "./components/SearchBarCard/SearchBarCard";
import CardGameInfo from "./components/CardGameInfo/CardGameInfo";
import CardGameList from "./components/CardGameList/CardGameList";
import Footer from "./components/Footer/Footer";
import { YGOCardGameAPI } from "./api/ygo-data";
import logoImg from "./assets/images/png/logoYgo.png";
import s from "./style.module.css";

function App() {
  const [currentCardGame, setCurrentCardGame] = useState();
  const [topViewList, setTopViewList] = useState([]);
  const [errorFetch, setErrorFetch] = useState("");

  async function fetchByCardName(name) {
    setErrorFetch("");
    const searchResponse = await YGOCardGameAPI.fetchByCardName(name);
    if (searchResponse && searchResponse.length > 0) {
      setCurrentCardGame(searchResponse[0]);
    } else {
      setErrorFetch("No card matching in the database.");
    }
  }

  const fetchRandomCard = useMemo(() => {
    return async () => {
      const randomCardGame = await YGOCardGameAPI.fetchRandomCard();
      if (randomCardGame) {
        setCurrentCardGame(randomCardGame);
      }
    };
  }, [currentCardGame]);

  const fetchTopViewRanking = useCallback(async () => {
    const topViewListResp = await YGOCardGameAPI.fetchTopViewRanking();
    if (topViewListResp.length > 0) {
      setTopViewList(topViewListResp.reverse().slice(0, 7));
    }
  }, [topViewList]);

  function updateCurrentCardGame(cardGame) {
    setCurrentCardGame(cardGame);
  }

  useEffect(() => {
    fetchRandomCard();
  }, []);

  useEffect(() => {
    if (currentCardGame) {
      fetchTopViewRanking();
    }
  }, [currentCardGame]);

  return (
    <div className={s.mainContainer}>
      <div className={s.header}>
        <Header title="YGO Watch Card" image={logoImg} />
        <SearchBarCard onSubmit={fetchByCardName} />
        <span>{errorFetch}</span>
      </div>
      <div className={s.cardGameDetails}>
        {currentCardGame && <CardGameInfo cardGame={currentCardGame} />}
      </div>
      <div className={s.cardGameTopRanking}>
        {currentCardGame && (
          <CardGameList
            onClickItem={updateCurrentCardGame}
            cardGameList={topViewList}
          />
        )}
      </div>
      <div className={s.footer}>
        <Footer footerText="Desarrollado por Erikson Fuenzalida - Proyecto Final React" />
      </div>
    </div>
  );
}

export default App;
