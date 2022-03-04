import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/homepage/Navigation";
import Product from "./components/product/Product";
import { useState } from "react";
import Cart from "./components/cart/Cart";

const App = () => {
  const [cart, setCart] = useState(0);
  const [items, setItems] = useState([]);

  const addNewItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (item) => {
    const newItems = items.filter((i) => i !== item);
    setItems(newItems);
    setCart(cart - item.price);
  };

  return (
    <Router>
      <Navigation cart={cart} />
      <Switch>
        <Route exact path="/">
          <Homepage cart={cart} setCart={setCart} addNewItem={addNewItem} />
        </Route>

        <Route path="/products/:id">
          <Product cart={cart} setCart={setCart} addNewItem={addNewItem} />
        </Route>

        <Route path="/cart">
          <Cart
            cart={cart}
            setCart={setCart}
            items={items}
            removeItem={removeItem}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
