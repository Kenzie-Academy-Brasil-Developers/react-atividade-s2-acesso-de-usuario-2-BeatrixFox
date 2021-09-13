import "./App.css";
import members from "./members";
import { Route, Switch } from "react-router-dom";
import Company from "./pages/Company/Company";
import Customer from "./pages/Customer/Customer";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/company/:id">
            <Company members={members} />
          </Route>
          <Route exact path="/customer/:id">
            <Customer members={members} />
          </Route>
          <Route exact path="/">
            <Home members={members} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
