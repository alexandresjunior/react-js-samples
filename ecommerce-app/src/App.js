import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/homepage/Navigation";
import Product from "./components/product/Product";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/products/:id">
          <Product />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
