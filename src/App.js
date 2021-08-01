import { BrowserRouter, Switch, Route } from "react-router-dom";

// Custom Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/cart/Cart";
import TemplateProvider from "./templates/templateProvider";

function App() {
  return (
    <TemplateProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </TemplateProvider>
  );
}

export default App;
