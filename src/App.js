import './App.css'
import {useState} from "react"
import {Route} from "react-router-dom"
import Nav from "./components/Nav/Nav.jsx"
import SideNav from "./components/Nav/SideNav.jsx"
import Landing from "./components/Landing/Landing.jsx"
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
    <div className="app">
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Nav mode={mode} handleChange={handleChange}/>
        <div className="layout">
        <SideNav/>
        <Route exact path="/">
          <Landing/>
        </Route>
        </div>
    </ThemeProvider>
    </div>
  )
}

export default App;