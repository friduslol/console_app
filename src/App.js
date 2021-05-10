import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Console from "./Pages/Console";
import ConsolesProvider from "./Contexts/ConsolesProvider";
import GamesProvider from "./Contexts/GamesProvider";
import GenresProvider from "./Contexts/GenresProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <ConsolesProvider>
          <GamesProvider>
            <GenresProvider>
              <Route exact path="/" component={Home} />
              <Route exact path="/consolePage/:id" component={Console} />
            </GenresProvider>
          </GamesProvider>
        </ConsolesProvider>
      </Router>
    </div>
  );
}

export default App;
