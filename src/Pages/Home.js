import { ConsolesContext } from "../Contexts/ConsolesProvider";
import { useContext, useEffect } from "react";
import Styles from "../css/home.module.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { consoles, fetchAllConsoles } = useContext(ConsolesContext);

  const historyHook = useHistory();

  const clickToConsole = (consoleId) => {
    historyHook.push(`/consolePage/${consoleId}`);
  };

  useEffect(() => {
    fetchAllConsoles();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={Styles.homePage}>
      <div className={Styles.imgContainer}>
        {consoles.map((console, i) => (
          <div key={i} className={Styles.imgWrapper}>
            <img
              onClick={() => clickToConsole(console._id)}
              src={console.imgUrl}
              className={Styles.consoleImg}
              alt={console.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
