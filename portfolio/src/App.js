import './App.css'
import {useState} from "react"
import {Route} from "react-router-dom"
import Nav from "./components/Nav/Nav.jsx"
import About from "./components/About/About.jsx"
import PortfolioList from "./components/PortfolioList/PortfolioList.jsx"
import SideNav from "./components/SideNav.jsx"
import PortfolioPreview from "./components/PortfolioPreview"
import Landing from "./components/Landing/Landing.jsx"
import Footer from "./components/Footer/Footer.jsx"
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import TestExpand from "./components/TestExpand.jsx"

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
  // function Child() {
  //   let {id} = useParams()
  //   function renderPage() {
  //     if(id == "about") {
  //       return <About/>
  //     } else if(id === "projects"){
  //       return <PortfolioList/>
  //     } else {
  //       return <PortfolioPreview id={id}/>
  //     }
  //   }
  //   return (
  //     <>{renderPage()}</>
  //   ) 
  // }
  return (
    <div className="app">
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Nav mode={mode} handleChange={handleChange}/>
        <div className="layout">
        <SideNav/>
        <Route path="/about"> 
          <About/>
        </Route> 
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route exact path="/projects" >
          <PortfolioList/>
        </Route>
        </div>
        <TestExpand/>
    </ThemeProvider>
    </div>
  )
}

export default App;