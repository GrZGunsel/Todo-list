import "./App.css";
import Todo_list from "./component/Todo_list";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
function App() {
  return (
    <Router>
      <div className="background">
        <div className="main">
          <div className="container">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Todo" component={Todo_list} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
