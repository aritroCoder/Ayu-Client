import {
  BrowserRouter as Router,
  Route,
  Switch

} from "react-router-dom";
import './App.css';
import Navbar from './components/NavBar'
import Home from "./components/Home";
import Footer from "./components/Footer";
import Doctor from "./components/Doctor";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Uc from './components/UnderConstruction'
import Team from "./components/Team";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/doctor"> <Doctor /> </Route>
          <Route exact path="/login"> <Login /> </Route>
          <Route exact path="/signup"> <Signup /> </Route>
          <Route exact path="/forgot"><Uc/></Route>
          <Route exact path="/team"> <Team/> </Route>
          <Route exact path="/about">  </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
