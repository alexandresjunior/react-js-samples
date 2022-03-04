import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/homepage/Navigation";
import Product from "./components/product/Product";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState(0);

  return (
    <Router>
      <Navigation cart={cart} />
      <Switch>
        <Route exact path="/">
          <Homepage cart={cart} setCart={setCart} />
        </Route>

        <Route path="/products/:id">
          <Product cart={cart} setCart={setCart} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
