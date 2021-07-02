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
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={AboutMe}/>
          <Route path='/projects' component={MyProjects}/>
          <Route path='/contact' component={ContactMe}/>
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
