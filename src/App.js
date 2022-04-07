import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect

} from "react-router-dom";
import { LoginContext } from './Contexts/LoginContext';
import './App.css';
import Navbar from './components/NavBar'
import Home from "./components/Home";
import Footer from "./components/Footer";
import Doctor from "./components/Doctor";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Uc from './components/UnderConstruction'
import Team from "./components/Team";
import Faq from "./components/FaqComponent";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [authtoken, setAuthtoken] = useState("");
  const [username, setUsername] = useState("");

  return (
    <>
      <Router>
        <LoginContext.Provider value={{ loggedIn, setLoggedIn, authtoken, setAuthtoken, username, setUsername }}>
          <Navbar />
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/doctor"> <Doctor /> </Route>
            <Route exact path="/login"> <Login /> </Route>
            <Route exact path="/signup"> <Signup /> </Route>
            <Route exact path="/forgot"><Uc /></Route>
            <Route exact path="/team"> <Team /> </Route>
            <Route exact path="/about"> </Route>
            <Route exact path="/faq"> <Faq /></Route>
            <Redirect to="/"/>
          </Switch>
          <Footer />
        </LoginContext.Provider>
      </Router>
    </>
  );
}

export default App;
