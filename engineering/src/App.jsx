import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer'
import Header from '../../askema/src/components/header'
import Home from './components/home'
import Products from './components/product/product'
import Services from './components/services/services'


// i want to use react router dom
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
        </Switch>

      </div>
      <Footer />
    </Router>
    
      
  )
}

export default App
