import { createContext, useState, useEffect } from "react";

export const ConsolesContext = createContext();

const ConsolesProvider = (props) => {
  const [consoles, setConsoles] = useState([]);
  const [games, setGames] = useState([]);
  const [singleConsole, setSingleConsole] = useState(false);

  useEffect(() => {}, [games]);

  const fetchAllConsoles = async () => {
    let consolesData = await fetch("/api/v1/consoles");
    consolesData = await consolesData.json();

    if (consolesData.length === 0) {
      console.log("error");
    } else {
      setConsoles(consolesData);
    }
  };

  const fetchConsoleById = async (consoleId) => {
    let singleConsole = await fetch(`/api/v1/consoles/${consoleId}`);
    singleConsole = await singleConsole.json();

    if (!singleConsole) {
      console.log("error");
    } else {
      loopingGameId(singleConsole.games);
      setSingleConsole(singleConsole);
    }
  };

  const loopingGameId = async (games) => {
    games.map((game) => {
      fetchGameById(game);
    });
  };

  const fetchGameById = async (gameId) => {
    let game = await fetch(`/api/v1/games/${gameId}`);
    game = await game.json();

    if (!game) {
      console.log("error");
    } else {
      setGames((prevState) => [game, ...prevState]);
    }
  };

  const values = {
    consoles,
    singleConsole,
    games,
    setGames,
    fetchGameById,
    fetchConsoleById,
    fetchAllConsoles,
  };

  return (
    <ConsolesContext.Provider value={values}>
      {props.children}
    </ConsolesContext.Provider>
  );
};

export default ConsolesProvider;
