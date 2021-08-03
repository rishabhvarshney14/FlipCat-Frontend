import { BrowserRouter, Switch, Route } from "react-router-dom";

// Custom Components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/cart/Cart";

import TemplateProvider from "./templates/templateProvider";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
