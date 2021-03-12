import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Consumer from "./components/Consumer";
import Merchants from "./components/Merchants";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/consumer" component={Consumer} />
          <Route exact path="/merchants" component={Merchants} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
