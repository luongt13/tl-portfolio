import './App.css'
import {useState} from "react"
// import useMediaQuery from '@material-ui/core/useMediaQuery'
import {Route} from "react-router-dom"
import Nav from "./components/Nav/Nav.jsx"
// import Contact from "./components/Contact"
import About from "./components/About"
import PortfolioList from "./components/PortfolioList/PortfolioList.jsx"
import PortfolioPreview from "./components/PortfolioPreview"
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

function App() {
  const [mode, setMode] = useState({
    checked: true,
  })
  const theme = createMuiTheme({
      palette: {
        type: mode.checked ? 'dark' : 'light'
      },
    })

    const handleChange = (event) => {
      setMode({...mode, [event.target.name]: event.target.checked})
    }

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <CssBaseline/>
            <Nav mode={mode} handleChange={handleChange}/>
            <Route path="/about"> 
            <About/>
            </Route>
            <Route exact path="/">
              <PortfolioPreview/>
            </Route>
            <Route exact path="/projects">
              <PortfolioList/>
            </Route>
    </ThemeProvider>
    </div>

  );
}

export default App;
