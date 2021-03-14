import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import AboutUs from "./components/AboutUs";
import Consumer from "./components/Consumer";
import Merchants from "./components/Merchants";
import Contact from "./components/Contact";
//Arabic Language
import AboutUsAr from "./components/AboutUSAr";
import ConsumerAr from "./components/ConsumerAr";
import MerchantsAr from "./components/MerchantsAr";
import ContactAr from "./components/ContactAr";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/about-ar" component={AboutUsAr} />
          <Route exact path="/consumer" component={Consumer} />
          <Route exact path="/consumer-ar" component={ConsumerAr} />
          <Route exact path="/merchants" component={Merchants} />
          <Route exact path="/merchants-ar" component={MerchantsAr} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/contact-ar" component={ContactAr} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
