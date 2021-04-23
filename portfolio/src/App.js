import './App.css'
import React from "react"
// import useMediaQuery from '@material-ui/core/useMediaQuery'
import {Route} from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import About from "./components/About"
import PortfolioList from "./components/PortfolioList"

import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

function App() {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const darkTheme = createMuiTheme({
      palette: {
        type: 'dark'
      },
    })
  return (
    <div className="App">
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
            <Nav/>
            <Route path="/about"> 
            <About/>
            </Route>
            <Route exact path="/">
              <PortfolioList/>
            </Route>
            <Footer/>
    </ThemeProvider>
    </div>

  );
}

export default App;
