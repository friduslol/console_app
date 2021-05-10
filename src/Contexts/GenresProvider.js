import { createContext } from "react";

export const GenresContext = createContext();

const GenresProvider = (props) => {
  const values = {};

  return (
    <GenresContext.Provider value={values}>
      {props.children}
    </GenresContext.Provider>
  );
};

export default GenresProvider;
