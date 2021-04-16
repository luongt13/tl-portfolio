import './App.css';
import {Route} from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import About from "./components/About"
import PortfolioList from "./components/PortfolioList"

function App() {
  return (
    <div className="App">
        <Nav/>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/">
          <PortfolioList/>
        </Route>
        <Footer/>
    </div>
  );
}

export default App;
