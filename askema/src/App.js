
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../src/components/home';
import AboutUs from './components/about/about';
import Header from './components/header';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import Product from './components/product/product';


function App() {
  return (
    <Router>
      <Header/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/contactus">
            <Contact />
          </Route>
          <Route exact path="/products">
            <Product />
          </Route>
          

        </Switch>
      </div>

    </Router>
  );

}

export default App;
