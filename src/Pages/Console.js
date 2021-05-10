import { ConsolesContext } from "../Contexts/ConsolesProvider";
import { useContext, useEffect } from "react";
import styles from "../css/console.module.css";

const Console = (props) => {
  const { singleConsole, fetchConsoleById, games, setGames } = useContext(
    ConsolesContext
  );

  useEffect(() => {
    fetchConsoleById(props.match.params.id);
    return () => {
      setGames([]);
    };
    // eslint-disable-next-line
  }, []);

  const renderConsole = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.consoleImg}
            src={singleConsole.imgUrl}
            alt="console logo"
          />
        </div>
        {games.map((game, i) => (
          <div className={styles.imgContainer} key={i}>
            <img className={styles.gameImg} src={game.imgUrl} alt={game.name} />
            <p>{game.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return games ? renderConsole() : <p>Loading...</p>;
};

export default Console;
