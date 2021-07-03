import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AboutMe from './pages/Aboutme';
import MyProjects from './pages/MyProjects';
import ContactMe from './pages/Contactme';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
    <Router  basename={window.location.pathname || ''}>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={AboutMe}/>
          <Route exact path='/projects' component={MyProjects}/>
          <Route exact path='/contact' component={ContactMe}/>
            {/* <Home/>
            <AboutMe/>
            <MyProjects/>
            <ContactMe/> */}
        </Switch>
        <Footer/>
      </div>
    </Router>  
  );
}

export default App;
