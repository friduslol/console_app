import { createContext } from "react";

export const GamesContext = createContext();

const GamesProvider = (props) => {
  const values = {};

  return (
    <GamesContext.Provider value={values}>
      {props.children}
    </GamesContext.Provider>
  );
};

export default GamesProvider;
